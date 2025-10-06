import {F1Parser} from '../F1Parser';
import {PacketHeaderParser} from './PacketHeaderParser';
import {PacketLapPositionsData} from './types';

/**
 * Parser for F1 25 Lap Positions packet (1131 bytes)
 * Parses the positions of all drivers at the start of each lap.
 */
export class PacketLapPositionsDataParser extends F1Parser {
  data: PacketLapPositionsData;

  constructor(buffer: Buffer, packetFormat: number) {
    super();
    this.endianess('little')
      .nest('m_header', { type: new PacketHeaderParser(packetFormat) })
      .uint8('m_numLaps')
      .uint8('m_lapStart')
      .array('m_positionForVehicleIdx', {
        length: 50, // cs_maxNumLapsInLapPositionsHistoryPacket
        type: new F1Parser().array('', { length: 22, type: new F1Parser().uint8('') }), // 22 cars
      });
    this.data = this.fromBuffer(buffer);
  }
}
