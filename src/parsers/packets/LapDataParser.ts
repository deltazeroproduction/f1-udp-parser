import {F1Parser} from '../F1Parser';

export class LapDataParser extends F1Parser {
  constructor(packetFormat: number) {
    super();

    this.endianess('little');

    this.uint32le('m_lastLapTimeInMS').uint32le('m_currentLapTimeInMS');

    if (packetFormat === 2023) {
      this.uint16le('m_sector1TimeInMS')
        .uint8('m_sector1TimeMinutes')
        .uint16le('m_sector2TimeInMS')
        .uint8('m_sector2TimeMinutes')
        .uint16le('m_deltaToCarInFrontInMS')
        .uint16le('m_deltaToRaceLeaderInMS');
    } else {
      this.uint16le('m_sector1TimeInMS').uint16le('m_sector2TimeInMS');
    }

    this.floatle('m_lapDistance')
      .floatle('m_totalDistance')
      .floatle('m_safetyCarDelta')
      .uint8('m_carPosition')
      .uint8('m_currentLapNum')
      .uint8('m_pitStatus')
      .uint8('m_numPitStops')
      .uint8('m_sector')
      .uint8('m_currentLapInvalid')
      .uint8('m_penalties');

    if (packetFormat === 2023) {
      this.uint8('m_totalWarnings').uint8('m_cornerCuttingWarnings');
    } else {
      this.uint8('m_warnings');
    }

    this.uint8('m_numUnservedDriveThroughPens')
      .uint8('m_numUnservedStopGoPens')
      .uint8('m_gridPosition')
      .uint8('m_driverStatus')
      .uint8('m_resultStatus')
      .uint8('m_pitLaneTimerActive')
      .uint16le('m_pitLaneTimeInLaneInMS')
      .uint16le('m_pitStopTimerInMS')
      .uint8('m_pitStopShouldServePen');
  }
}
