import {F1Parser} from '../F1Parser';

export class ParticipantDataParser extends F1Parser {
  constructor(packetFormat: number) {
    super();

    this.uint8('m_aiControlled')
      .uint8('m_driverId')
      .uint8('m_networkId')
      .uint8('m_teamId')
      .uint8('m_myTeam')
      .uint8('m_raceNumber')
      .uint8('m_nationality')
      .string('m_name', {
        length: 48,
        stripNull: true,
      })
      .uint8('m_yourTelemetry');

    if (packetFormat === 2023) {
      this.uint8('m_showOnlineNames').uint8('m_platform');
    }

    if (packetFormat === 2024) {
      this.uint8('m_showOnlineNames')
        .uint16le('m_techLevel')
        .uint8('m_platform');
    }
  }
}
