import {Parser} from 'binary-parser';
import {F1Parser} from '../F1Parser';
import {PacketHeaderParser} from './PacketHeaderParser';
import {PacketMotionExData} from './types';

export class PacketMotionExDataParser extends F1Parser {
  data: PacketMotionExData;

  constructor(buffer: Buffer, packetFormat: number) {
    super();

    this.endianess('little')
      .nest('m_header', {
        type: new PacketHeaderParser(packetFormat),
      })
      .array('m_suspensionPosition', {
        length: 4,
        type: new Parser().floatle(''),
      })
      .array('m_suspensionVelocity', {
        length: 4,
        type: new Parser().floatle(''),
      })
      .array('m_suspensionAcceleration', {
        length: 4,
        type: new Parser().floatle(''),
      })
      .array('m_wheelSpeed', {
        length: 4,
        type: new Parser().floatle(''),
      })
      .array('m_wheelSlipRatio', {
        length: 4,
        type: new Parser().floatle(''),
      })
      .array('m_wheelSlipAngle', {
        length: 4,
        type: new Parser().floatle(''),
      })
      .array('m_wheelLatForce', {
        length: 4,
        type: new Parser().floatle(''),
      })
      .array('m_wheelLongForce', {
        length: 4,
        type: new Parser().floatle(''),
      })
      .floatle('m_heightOfCOGAboveGround')
      .floatle('m_localVelocityX')
      .floatle('m_localVelocityY')
      .floatle('m_localVelocityZ')
      .floatle('m_angularVelocityX')
      .floatle('m_angularVelocityY')
      .floatle('m_angularVelocityZ')
      .floatle('m_angularAccelerationX')
      .floatle('m_angularAccelerationY')
      .floatle('m_angularAccelerationZ')
      .floatle('m_frontWheelsAngle')
      .array('m_wheelVertForce', {
        length: 4,
        type: new Parser().floatle(''),
      });

    if (packetFormat === 2024) {
      this.floatle('m_frontAeroHeight')
        .floatle('m_rearAeroHeight')
        .floatle('m_frontRollAngle')
        .floatle('m_rearRollAngle')
        .floatle('m_chassisYaw');
    }

    this.data = this.fromBuffer(buffer);
  }
}
