import {
  PacketCarDamageDataParser,
  PacketCarSetupDataParser,
  PacketCarStatusDataParser,
  PacketCarTelemetryDataParser,
  PacketEventDataParser,
  PacketFinalClassificationDataParser,
  PacketLapDataParser,
  PacketLobbyInfoDataParser,
  PacketMotionDataParser,
  PacketParticipantsDataParser,
  PacketSessionDataParser,
  PacketSessionHistoryDataParser,
  PacketTyreSetsDataParser,
  PacketMotionExDataParser,
  PacketTimeTrialDataParser,
} from './parsers/packets';

export interface Options {
  port?: number;
  forwardAddresses?: Address[] | undefined;
  skipParsing?: boolean;
  testModeActive?: boolean;
}

export interface TestMode {
  bufferStream: NodeJS.WritableStream;
  fileCount: number;
  bufferCount: number;
  logDir: string;
}

export interface Address {
  port: number;
  ip?: string;
}

export interface ParsedMessage {
  packetID: string;
  packetData:
    | PacketTimeTrialDataParser
    | PacketMotionExDataParser
    | PacketTyreSetsDataParser
    | PacketSessionHistoryDataParser
    | PacketSessionDataParser
    | PacketMotionDataParser
    | PacketLapDataParser
    | PacketEventDataParser
    | PacketParticipantsDataParser
    | PacketCarSetupDataParser
    | PacketCarTelemetryDataParser
    | PacketCarStatusDataParser
    | PacketCarDamageDataParser
    | PacketFinalClassificationDataParser
    | PacketLobbyInfoDataParser
    | null;
}
