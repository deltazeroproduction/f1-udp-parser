import {F1Parser} from '../F1Parser';
import {PacketHeaderParser} from './PacketHeaderParser';
import {TimeTrialDataSetParser} from './TimeTrialDataSetParser';
import {PacketTimeTrialData} from './types';

export class PacketTimeTrialDataParser extends F1Parser {
  data: PacketTimeTrialData;

  constructor(buffer: Buffer, packetFormat: number) {
    super();

    this.endianess('little').nest('m_header', {
      type: new PacketHeaderParser(packetFormat),
    });

    this.nest('m_playerSessionBestDataSet', {
      type: new TimeTrialDataSetParser(),
    });

    this.nest('m_personalBestDataSet', {
      type: new TimeTrialDataSetParser(),
    });

    this.nest('m_rivalDataSet', {
      type: new TimeTrialDataSetParser(),
    });

    this.data = this.fromBuffer(buffer);
  }
}
