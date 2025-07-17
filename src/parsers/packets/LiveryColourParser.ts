import {F1Parser} from '../F1Parser';

export class LiveryColourParser extends F1Parser {
  constructor() {
    super();
    this.endianess('little').uint8('red').uint8('green').uint8('blue');
  }
}
