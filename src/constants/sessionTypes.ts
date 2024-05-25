import {SessionTypes} from './types';

export const SESSION_TYPES: {[index: number]: SessionTypes} = {
  0: {short: 'UNK', long: 'Unknown'},
  1: {short: 'FP1', long: 'Free Practice 1'},
  2: {short: 'FP2', long: 'Free Practice 2'},
  3: {short: 'FP3', long: 'Free Practice 3'},
  4: {short: 'ShortFP', long: 'Short Free Practice'},
  5: {short: 'Q1', long: 'Qualifying 1'},
  6: {short: 'Q2', long: 'Qualifying 2'},
  7: {short: 'Q3', long: 'Qualifying 3'},
  8: {short: 'ShortQ', long: 'Short Qualifying'},
  9: {short: 'OneShotQ', long: 'One Shot Qualifying'},
  10: {short: 'R', long: 'Race'}, // Sprint Shootout 1 in F1 24
  11: {short: 'R2', long: 'Race 2'}, // Sprint Shootout 2 in F1 24
  12: {short: 'R3', long: 'Race 3'}, // Sprint Shootout 3 in F1 24
  13: {short: 'TT', long: 'Time Trial' }, // Short Sprint Shootout in F1 24
  14: {short: 'OneShotS', long: 'One-Shot Sprint Shootout'}, // F1 24
  15: {short: 'R', long: 'Race'}, // F1 24
  16: {short: 'R2', long: 'Race 2'}, // F1 24
  17: {short: 'R3', long: 'Race 3'}, // F1 24
  18: {short: 'TT', long: 'Time Trial'}, // F1 24
};
