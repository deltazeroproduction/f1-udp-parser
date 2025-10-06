import {F1Parser} from '../F1Parser';
import {LiveryColourParser} from './LiveryColourParser';

export class ParticipantDataParser extends F1Parser {
  constructor(packetFormat: number) {
    super();

    this.uint8('m_aiControlled')
      .uint8('m_driverId')
      .uint8('m_networkId')
      .uint8('m_teamId')
      .uint8('m_myTeam')
      .uint8('m_raceNumber')
      .uint8('m_nationality');

    // Name length: 32 in 2025, 48 in 2024 and earlier
    if (packetFormat === 2025) {
      this.string('m_name', {
        length: 32,
        stripNull: true,
      });
    } else {
      this.string('m_name', {
        length: 48,
        stripNull: true,
      });
    }

    this.uint8('m_yourTelemetry');

    if (packetFormat === 2023) {
      this.uint8('m_showOnlineNames')
        .uint8('m_platform');
    }

    if (packetFormat === 2024) {
      this.uint8('m_showOnlineNames')
        .uint16le('m_techLevel')
        .uint8('m_platform');
    }

    if (packetFormat === 2025) {
      this.uint8('m_showOnlineNames')
        .uint16le('m_techLevel')
        .uint8('m_platform')
        .uint8('m_numColours')
        .array('m_liveryColour', { length: 4, type: new LiveryColourParser() });
    }
  }
}
