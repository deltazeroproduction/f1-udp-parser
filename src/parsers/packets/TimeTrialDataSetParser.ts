import {F1Parser} from '../F1Parser';

export class TimeTrialDataSetParser extends F1Parser {
  constructor() {
    super();
    this.endianess('little')
      .uint8('m_carIdx')
      .uint8('m_teamId')
      .uint32('m_sector1TimeInMS')
      .uint32('m_sector2TimeInMS')
      .uint32('m_sector3TimeInMS')
      .uint8('m_tractionControl')
      .uint8('m_gearboxAssist')
      .uint8('m_antiLockBrakes')
      .uint8('m_equalCarPerformance')
      .uint8('m_customSetup')
      .uint8('m_valid');
  }
}
