import {Team} from './types';

const MERCEDES_COLOR = '#00D2BE';
const FERRARI_COLOR = '#DC0000';
const RED_BULL_COLOR = '#0600EF';
const WILLIAMS_COLOR = '#005AFF';
const ASTON_MARTIN_COLOR = '#006F62';
const ALPINE_COLOR = '#0090FF';
const ALPHA_TAURI_COLOR = '#2B4562';
const HAAS_COLOR = '#FFFFFF';
const MCLAREN_COLOR = '#FF8700';
const ALFA_ROMEO_COLOR = '#900000';

const ART_GRAND_PRIX_COLOR = '#B4B3B4';
const CAMPOS_VEXATEC_COLOR = '#EBC110';
const CARLIN_COLOR = '#243EF6';
const CHAROUZ_COLOR = '#84020A';
const DAMS_COLOR = '#0ED4FA';
const MP_MOTORSPORT_COLOR = '#F7401A';
const TRIDENT_COLOR = '#0E1185';
const BWT_ARDEN_COLOR = '#ff88d3';
const UNI_VIRTUOSI_COLOR = '#FBEC20';
const PREMA_COLOR = '#E80309';
const HITECH_COLOR = '#E8E8E8';

const RACING_POINT_COLOR_2020 = '#FAA0BE';
const RENAULT_COLOR_2020 = '#FFF500';

export const TEAMS: {[year: number]: {[index: number]: Team}} = {
  2023: {
    0: {name: 'Mercedes', color: MERCEDES_COLOR},
    1: {name: 'Ferrari', color: FERRARI_COLOR},
    2: {name: 'Red Bull Racing', color: RED_BULL_COLOR},
    3: {name: 'Williams', color: WILLIAMS_COLOR},
    4: {name: 'Aston Martin', color: ASTON_MARTIN_COLOR},
    5: {name: 'Alpine', color: ALPINE_COLOR},
    6: {name: 'Alpha Tauri', color: ALPHA_TAURI_COLOR},
    7: {name: 'Haas', color: HAAS_COLOR},
    8: {name: 'McLaren', color: MCLAREN_COLOR},
    9: {name: 'Alfa Romeo', color: ALFA_ROMEO_COLOR},
    41: {name: 'F1 Generic', color: '#FFFFFF'},
    85: {name: 'Mercedes 2020', color: HITECH_COLOR},
    86: {name: 'Ferrari 2020', color: FERRARI_COLOR},
    87: {name: 'Red Bull 2020', color: RED_BULL_COLOR},
    88: {name: 'Williams 2020', color: WILLIAMS_COLOR},
    89: {name: 'Racing Point 2020', color: RACING_POINT_COLOR_2020},
    90: {name: 'Renault 2020', color: RENAULT_COLOR_2020},
    91: {name: 'Alpha Tauri 2020', color: ALPHA_TAURI_COLOR},
    92: {name: 'Haas 2020', color: HAAS_COLOR},
    93: {name: 'McLaren 2020', color: MCLAREN_COLOR},
    94: {name: 'Alfa Romeo 2020', color: ALFA_ROMEO_COLOR},
    95: {name: 'Aston Martin DB11 V12', color: ASTON_MARTIN_COLOR},
    96: {name: 'Aston Martin Vantage F1 Edition', color: ASTON_MARTIN_COLOR},
    97: {name: 'Aston Martin Vantage Safety Car', color: ASTON_MARTIN_COLOR},
    98: {name: 'Ferrari F8 Tributo', color: FERRARI_COLOR},
    99: {name: 'Ferrari Roma', color: FERRARI_COLOR},
    100: {name: 'McLaren 720S', color: MCLAREN_COLOR},
    101: {name: 'McLaren Artura', color: MCLAREN_COLOR},
    102: {
      name: 'Mercedes AMG GT Black Series Safety Car',
      color: MERCEDES_COLOR,
    },
    103: {name: 'Mercedes AMG GTR Pro', color: MERCEDES_COLOR},
    104: {name: 'F1 Custom Team', color: '#FFFFFF'},
    106: {name: 'Prema 21', color: PREMA_COLOR},
    107: {name: 'Uni-Virtuosi 21', color: UNI_VIRTUOSI_COLOR},
    108: {name: 'Carlin 21', color: CARLIN_COLOR},
    109: {name: 'HiTech 21', color: HITECH_COLOR},
    110: {name: 'ART GP 21', color: ART_GRAND_PRIX_COLOR},
    111: {name: 'MP Motorsport 21', color: MP_MOTORSPORT_COLOR},
    112: {name: 'Charouz 21', color: CHAROUZ_COLOR},
    113: {name: 'Dams 21', color: DAMS_COLOR},
    114: {name: 'Campos 21', color: CAMPOS_VEXATEC_COLOR},
    115: {name: 'BWT 21', color: BWT_ARDEN_COLOR},
    116: {name: 'Trident 21', color: TRIDENT_COLOR},

    117: {name: 'Mercedes AMG GT Black Series', color: MERCEDES_COLOR},
    118: {name: 'Mercedes 22', color: MERCEDES_COLOR},
    119: {name: 'Ferrari 22', color: FERRARI_COLOR},
    120: {name: 'Red Bull Racing 22', color: RED_BULL_COLOR},
    121: {name: 'Williams 22', color: WILLIAMS_COLOR},
    122: {name: 'Aston Martin 22', color: ASTON_MARTIN_COLOR},
    123: {name: 'Alpine 22', color: ALPINE_COLOR},
    124: {name: 'Alpha Tauri 22', color: ALPHA_TAURI_COLOR},
    125: {name: 'Haas 22', color: HAAS_COLOR},
    126: {name: 'McLaren 22', color: MCLAREN_COLOR},
    127: {name: 'Alfa Romeo 22', color: ALFA_ROMEO_COLOR},

    128: {name: 'Konnersport 22', color: MERCEDES_COLOR},
    129: {name: 'Konnersport', color: MERCEDES_COLOR},
    130: {name: 'Prema 22', color: PREMA_COLOR},
    131: {name: 'Virtuosi 22', color: UNI_VIRTUOSI_COLOR},
    132: {name: 'Carlin 22', color: CARLIN_COLOR},
    133: {name: 'MP Motorsport 22', color: MP_MOTORSPORT_COLOR},
    134: {name: 'Charouz 22', color: CHAROUZ_COLOR},
    135: {name: 'Dams 22', color: DAMS_COLOR},
    136: {name: 'Campos 22', color: CAMPOS_VEXATEC_COLOR},
    137: {name: 'Van Amersfoort Racing 22', color: '#FFFFFF'},
    138: {name: 'Trident 22', color: TRIDENT_COLOR},
    139: {name: 'Hitech 22', color: '#FFFFFF'},
    140: {name: 'Art GP 22', color: '#FFFFFF'},
    143: {name: 'Art GP 23', color: '#FFFFFF'},
    144: {name: 'Campos 23', color: CAMPOS_VEXATEC_COLOR},
    145: {name: 'Carlin 23', color: CARLIN_COLOR},
    146: {name: 'PHM 23', color: '#FFFFFF'},
    147: {name: 'Dams 23', color: DAMS_COLOR},
    148: {name: 'Hitech 23', color: '#FFFFFF'},
    149: {name: 'MP Motorsport 23', color: MP_MOTORSPORT_COLOR},
    150: {name: 'Prema 23', color: PREMA_COLOR},
    151: {name: 'Trident 23', color: TRIDENT_COLOR},
    152: {name: 'Van Amersfoort Racing 23', color: '#FFFFFF'},
    153: {name: 'Virtuosi 23', color: UNI_VIRTUOSI_COLOR},
    255: {name: 'Not found', color: '#FFFFFF'},
  },
  2024: {
    0: {name: 'Mercedes', color: MERCEDES_COLOR},
    1: {name: 'Ferrari', color: FERRARI_COLOR},
    2: {name: 'Red Bull Racing', color: RED_BULL_COLOR},
    3: {name: 'Williams', color: WILLIAMS_COLOR},
    4: {name: 'Aston Martin', color: ASTON_MARTIN_COLOR},
    5: {name: 'Alpine', color: ALPINE_COLOR},
    6: {name: 'RB', color: ALPHA_TAURI_COLOR},
    7: {name: 'Haas', color: HAAS_COLOR},
    8: {name: 'McLaren', color: MCLAREN_COLOR},
    9: {name: 'Sauber', color: ALFA_ROMEO_COLOR},
    41: {name: 'F1 Generic', color: '#FFFFFF'},
    104: {name: 'F1 Custom Team', color: '#FFFFFF'},
    143: {name: "Art GP '23", color: ART_GRAND_PRIX_COLOR},
    144: {name: "Campos '23", color: CAMPOS_VEXATEC_COLOR},
    145: {name: "Carlin '23", color: CARLIN_COLOR},
    146: {name: "PHM '23", color: '#FFFFFF'},
    147: {name: "Dams '23", color: DAMS_COLOR},
    148: {name: "Hitech '23", color: HITECH_COLOR},
    149: {name: "MP Motorsport '23", color: MP_MOTORSPORT_COLOR},
    150: {name: "Prema '23", color: PREMA_COLOR},
    151: {name: "Trident '23", color: TRIDENT_COLOR},
    152: {name: "Van Amersfoort Racing '23", color: '#FFFFFF'},
    153: {name: "Virtuosi '23", color: UNI_VIRTUOSI_COLOR},
  },
};
