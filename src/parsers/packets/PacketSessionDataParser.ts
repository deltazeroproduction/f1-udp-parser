import {Parser} from 'binary-parser';
import {F1Parser} from '../F1Parser';
import {MarshalZoneParser} from './MarshalZoneParser';
import {PacketHeaderParser} from './PacketHeaderParser';
import {PacketSessionData} from './types';
import {WeatherForecastSampleParser} from './WeatherForecastSampleParser';

export class PacketSessionDataParser extends F1Parser {
  data: PacketSessionData;

  constructor(buffer: Buffer, packetFormat: number) {
    super();

    this.endianess('little')
      .nest('m_header', {
        type: new PacketHeaderParser(packetFormat),
      })
      .uint8('m_weather')
      .int8('m_trackTemperature')
      .int8('m_airTemperature')
      .uint8('m_totalLaps')
      .uint16le('m_trackLength')
      .uint8('m_sessionType')
      .int8('m_trackId')
      .uint8('m_formula')
      .uint16le('m_sessionTimeLeft')
      .uint16le('m_sessionDuration')
      .uint8('m_pitSpeedLimit')
      .uint8('m_gamePaused')
      .uint8('m_isSpectating')
      .uint8('m_spectatorCarIndex')
      .uint8('m_sliProNativeSupport')
      .uint8('m_numMarshalZones')
      .array('m_marshalZones', {length: 21, type: new MarshalZoneParser()})
      .uint8('m_safetyCarStatus')
      .uint8('m_networkGame')
      .uint8('m_numWeatherForecastSamples');

    if (packetFormat === 2022 || packetFormat === 2023) {
      this.array('m_weatherForecastSamples', {
        length: 56,
        type: new WeatherForecastSampleParser(),
      });
    }

    if (packetFormat === 2024 || packetFormat === 2025) {
      this.array('m_weatherForecastSamples', {
        length: 64,
        type: new WeatherForecastSampleParser(),
      });
    }

    this.uint8('m_forecastAccuracy')
      .uint8('m_aiDifficulty')
      .uint32le('m_seasonLinkIdentifier')
      .uint32le('m_weekendLinkIdentifier')
      .uint32le('m_sessionLinkIdentifier')
      .uint8('m_pitStopWindowIdealLap')
      .uint8('m_pitStopWindowLatestLap')
      .uint8('m_pitStopRejoinPosition')
      .uint8('m_steeringAssist')
      .uint8('m_brakingAssist')
      .uint8('m_gearboxAssist')
      .uint8('m_pitAssist')
      .uint8('m_pitReleaseAssist')
      .uint8('m_ERSAssist')
      .uint8('m_DRSAssist')
      .uint8('m_dynamicRacingLine')
      .uint8('m_dynamicRacingLineType')
      .uint8('m_gameMode')
      .uint8('m_ruleSet')
      .uint32le('m_timeOfDay')
      .uint8('m_sessionLength');

    if (packetFormat === 2023) {
      this.uint8('m_speedUnitsLeadPlayer')
        .uint8('m_temperatureUnitsLeadPlayer')
        .uint8('m_speedUnitsSecondaryPlayer')
        .uint8('m_temperatureUnitsSecondaryPlayer')
        .uint8('m_numSafetyCarPeriods')
        .uint8('m_numVirtualSafetyCarPeriods')
        .uint8('m_numRedFlagPeriods');
    }

    if (packetFormat === 2024 || packetFormat === 2025) {
      this.uint8('m_speedUnitsLeadPlayer')
        .uint8('m_temperatureUnitsLeadPlayer')
        .uint8('m_speedUnitsSecondaryPlayer')
        .uint8('m_temperatureUnitsSecondaryPlayer')
        .uint8('m_numSafetyCarPeriods')
        .uint8('m_numVirtualSafetyCarPeriods')
        .uint8('m_numRedFlagPeriods')
        .uint8('m_equalCarPerformance')
        .uint8('m_recoveryMode')
        .uint8('m_flashbackLimit')
        .uint8('m_surfaceType')
        .uint8('m_lowFuelMode')
        .uint8('m_raceStarts')
        .uint8('m_tyreTemperature')
        .uint8('m_pitLaneTyreSim')
        .uint8('m_carDamage')
        .uint8('m_carDamageRate')
        .uint8('m_collisions')
        .uint8('m_collisionsOffForFirstLapOnly')
        .uint8('m_mpUnsafePitRelease')
        .uint8('m_mpOffForGriefing')
        .uint8('m_cornerCuttingStringency')
        .uint8('m_parcFermeRules')
        .uint8('m_pitStopExperience')
        .uint8('m_safetyCar')
        .uint8('m_safetyCarExperience')
        .uint8('m_formationLap')
        .uint8('m_formationLapExperience')
        .uint8('m_redFlags')
        .uint8('m_affectsLicenceLevelSolo')
        .uint8('m_affectsLicenceLevelMP')
        .uint8('m_numSessionsInWeekend')
        .array('m_weekendStructure', {
          length: 12,
          type: new Parser().uint8(''),
        })
        .floatle('m_sector2LapDistanceStart')
        .floatle('m_sector3LapDistanceStart');
    }

    this.data = this.fromBuffer(buffer);
  }
}
