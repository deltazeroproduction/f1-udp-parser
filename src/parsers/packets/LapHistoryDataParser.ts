import {F1Parser} from '../F1Parser';

export class LapHistoryDataParser extends F1Parser {
  constructor(packetFormat: number) {
    super();
    this.endianess('little').uint32('m_lapTimeInMS');

    if (packetFormat === 2023) {
      this.uint16le('m_sector1TimeInMS')
        .uint8('m_sector1TimeMinutes')
        .uint16le('m_sector2TimeInMS')
        .uint8('m_sector2TimeMinutes')
        .uint16le('m_sector3TimeInMS')
        .uint8('m_sector3TimeMinutes');
    } else {
      this.uint16('m_sector1TimeInMS')
        .uint16('m_sector2TimeInMS')
        .uint16('m_sector3TimeInMS');
    }

    this.uint8('m_lapValidBitFlags');
  }
}
