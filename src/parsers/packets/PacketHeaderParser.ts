import {F1Parser} from '../F1Parser';

export class PacketHeaderParser extends F1Parser {
  constructor(packetFormat: number) {
    super();

    this.endianess('little').uint16le('m_packetFormat');

    if (packetFormat === 2023 || packetFormat === 2024) {
      this.uint8('m_gameYear');
    }

    this.uint8('m_gameMajorVersion')
      .uint8('m_gameMinorVersion')
      .uint8('m_packetVersion')
      .uint8('m_packetId')
      .uint64('m_sessionUID')
      .floatle('m_sessionTime')
      .uint32('m_frameIdentifier');

    if (packetFormat === 2023 || packetFormat === 2024) {
      this.uint32('m_overallFrameIdentifier');
    }

    this.uint8('m_playerCarIndex').uint8('m_secondaryPlayerCarIndex');
  }
}
