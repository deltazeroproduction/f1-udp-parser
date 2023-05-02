import {PacketSize} from './types';

export const PACKET_SIZES: {[index: string]: {[index: number]: PacketSize}} = {
  motion: {2023: 1521, 2022: 1464},
  session: {2023: 644, 2022: 632},
  lapData: {2023: 1131, 2022: 972},
  event: {2023: 45, 2022: 40},
  participants: {2023: 1306, 2022: 1257},
  carSetups: {2023: 1107, 2022: 1102},
  carTelemetry: {2023: 1352, 2022: 1347},
  carStatus: {2023: 1239, 2022: 1058},
  finalClassification: {2023: 1020, 2022: 1015},
  lobbyInfo: {2023: 1218, 2022: 1191},
  carDamage: {2023: 953, 2022: 948},
  sessionHistory: {2023: 1460, 2022: 1155},
  tyreSets: {2023: 230},
};
