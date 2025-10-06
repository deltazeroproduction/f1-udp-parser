import {F1Parser} from '../F1Parser';
import {CarSetupDataParser} from './CarSetupDataParser';
import {PacketHeaderParser} from './PacketHeaderParser';
import {PacketCarSetupData} from './types';

export class PacketCarSetupDataParser extends F1Parser {
  data: PacketCarSetupData;

  constructor(buffer: Buffer, packetFormat: number) {
    super();

    this.endianess('little')
      .nest('m_header', {
        type: new PacketHeaderParser(packetFormat),
      })
      .array('m_carSetups', {
        length: 22,
        type: new CarSetupDataParser(packetFormat),
      });

    if (packetFormat === 2024 || packetFormat === 2025) {
      this.floatle('m_nextFrontWingValue');
    }

    this.data = this.fromBuffer(buffer);
  }
}
