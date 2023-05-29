// tslint:disable-next-line
import * as dgram from 'dgram';
import {EventEmitter} from 'events';
import {AddressInfo} from 'net';
import fs from 'fs';
import os from 'os';
import path from 'path';

import * as constants from './constants';
import * as constantsTypes from './constants/types';
import {
  PacketCarDamageDataParser,
  PacketCarSetupDataParser,
  PacketCarStatusDataParser,
  PacketCarTelemetryDataParser,
  PacketEventDataParser,
  PacketFinalClassificationDataParser,
  PacketFormatParser,
  PacketHeaderParser,
  PacketLapDataParser,
  PacketLobbyInfoDataParser,
  PacketMotionDataParser,
  PacketParticipantsDataParser,
  PacketSessionDataParser,
  PacketSessionHistoryDataParser,
  PacketTyreSetsDataParser,
  PacketMotionExDataParser,
} from './parsers/packets';
import * as packetTypes from './parsers/packets/types';
import {Address, Options, ParsedMessage, TestMode} from './types';

const DEFAULT_PORT = 20777;
const FORWARD_ADDRESSES = undefined;
const ADDRESS = 'localhost';

/**
 *
 */
class F1TelemetryClient extends EventEmitter {
  port: number;
  forwardAddresses?: Address[];
  socket?: dgram.Socket;
  testModeActive?: boolean = false;
  testMode?: TestMode;
  cache: any = {};

  constructor(opts: Options = {}) {
    super();

    const {port = DEFAULT_PORT, forwardAddresses = FORWARD_ADDRESSES, testModeActive } = opts;

    this.port = port;
    this.forwardAddresses = forwardAddresses;
    this.socket = dgram.createSocket('udp4');
    this.cache = {};

    this.testModeActive = testModeActive;
    if(testModeActive) this.testMode = initializeTestMode.call(this);

  }

  /**
   *
   * @param {Buffer} message
   */
  static parseBufferMessage(message: Buffer): ParsedMessage | undefined {
    const {m_packetFormat, m_packetId} =
      F1TelemetryClient.parsePacketHeader(message);
    
    const parser = F1TelemetryClient.getParserByPacketId(m_packetId);

    if (!parser) {
      return;
    }

    const packetData = new parser(message, m_packetFormat);
    const packetID = Object.keys(constants.PACKETS)[m_packetId];

    // emit parsed message
    return {packetData, packetID};
  }

  /**
   *
   * @param {Buffer} buffer
   */
  static parsePacketHeader(
    buffer: Buffer
    // tslint:disable-next-line:no-any
  ): any {
    const packetFormatParser = new PacketFormatParser();
    const {m_packetFormat} = packetFormatParser.fromBuffer(buffer);
    const packetHeaderParser = new PacketHeaderParser(m_packetFormat);
    const data = packetHeaderParser.fromBuffer(buffer);
    return packetHeaderParser.fromBuffer(buffer);
  }

  /**
   *
   * @param {Number} packetFormat
   * @param {Number} packetId
   */
  static getPacketSize(packetFormat: number, packetId: number) {
    const {PACKET_SIZES} = constants;
    const packetValues = Object.values(PACKET_SIZES);
    return packetValues[packetId][packetFormat];
  }

  /**
   *
   * @param {Number} packetId
   */
  static getParserByPacketId(packetId: number) {
    const {PACKETS} = constants;

    const packetKeys = Object.keys(PACKETS);
    const packetType = packetKeys[packetId];

    switch (packetType) {
      case PACKETS.session:
        return PacketSessionDataParser;

      case PACKETS.motion:
        return PacketMotionDataParser;

      case PACKETS.lapData:
        return PacketLapDataParser;

      case PACKETS.event:
        return PacketEventDataParser;

      case PACKETS.participants:
        return PacketParticipantsDataParser;

      case PACKETS.carSetups:
        return PacketCarSetupDataParser;

      case PACKETS.carTelemetry:
        return PacketCarTelemetryDataParser;

      case PACKETS.carStatus:
        return PacketCarStatusDataParser;

      case PACKETS.finalClassification:
        return PacketFinalClassificationDataParser;

      case PACKETS.lobbyInfo:
        return PacketLobbyInfoDataParser;

      case PACKETS.carDamage:
        return PacketCarDamageDataParser;

      case PACKETS.sessionHistory:
        return PacketSessionHistoryDataParser;

      case PACKETS.tyreSets:
        return PacketTyreSetsDataParser;

      case PACKETS.motionEx:
        return PacketMotionExDataParser;

      default:
        return null;
    }
  }

  /**
   *
   * @param {Buffer} message
   */
  handleMessage(message: Buffer) {
    if (this.forwardAddresses) {
      // bridge message
      this.bridgeMessage(message);
    }

    const parsedMessage = F1TelemetryClient.parseBufferMessage(message);
    
    if (!parsedMessage || !parsedMessage.packetData) {
      return;
    }
    
    // if(this.cache[parsedMessage?.m_packetId]) this.cache[parsedMessage?.m_packetId] += 1;
    // else this.cache[parsedMessage?.m_packetId] = 1;
    // this.cache[parsedMessage?.m_packetId] = message.byteLength;
    
    // emit parsed message
    this.emit(parsedMessage.packetID, parsedMessage.packetData.data);
  }
  /**
   *
   * @param {Buffer} message
   */
  handleTestModeMessage(message: Buffer) {
    const { testMode } = this;
    if(!testMode) return;

    testMode.bufferStream.write(`${JSON.stringify(message.toJSON().data)},\n`);
    testMode.bufferCount += 1;

    if(testMode.bufferCount > 10000) {
      testMode.bufferStream.end();
      testMode.fileCount++;
      testMode.bufferCount = 0;
      testMode.bufferStream = fs.createWriteStream(`${testMode.logDir}/chunk_${testMode.fileCount}.json`);
    }
  }

  /**
   *
   * @param {Buffer} message
   */
  bridgeMessage(message: Buffer) {
    if (!this.socket) {
      throw new Error('Socket is not initialized');
    }
    if (!this.forwardAddresses) {
      throw new Error('No ports to bridge over');
    }
    for (const address of this.forwardAddresses) {
      this.socket.send(
        message,
        0,
        message.length,
        address.port,
        address.ip || '0.0.0.0'
      );
    }
  }

  /**
   * Method to start listening for packets
   */
  start() {
    if (!this.socket) {
      return;
    }

    this.socket.on('listening', () => {
      if (!this.socket) {
        return;
      }

      const address = this.socket.address() as AddressInfo;
      console.log(
        `UDP Client listening on ${address.address}:${address.port} 🏎`
      );
      this.socket.setBroadcast(true);
    });

    this.socket.on('message', (m) => {
      if(this.testModeActive && this.testMode) {
        this.handleTestModeMessage(m);
      } 
      else this.handleMessage(m);
    
    });
    this.socket.bind({
      port: this.port,
      exclusive: false,
    });
  }

  /**
   * Method to close the client
   */
  stop() {
    if (!this.socket) {
      return;
    }

    return this.socket.close(() => {
      console.log(`UDP Client closed 🏁`);
      this.socket = undefined;
    });
  }
}

export {
  F1TelemetryClient,
  constants,
  constantsTypes,
  packetTypes,
  DEFAULT_PORT,
  FORWARD_ADDRESSES,
};

function initializeTestMode() {
  const localAppDataDirectory = path.join(os.homedir(), 'AppData', 'Local');
  const testLogDir = `${localAppDataDirectory}/Podium/udp_logs/${Date.now()}`;
  fs.mkdirSync(testLogDir);
  
  const testMode: TestMode = {
    bufferStream: fs.createWriteStream(`${testLogDir}/chunk_${0}.json`),
    fileCount: 0,
    bufferCount: 0,
    logDir: testLogDir
  };

  return testMode;
}
