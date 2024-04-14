import {PacketSize} from './types';

export const PACKET_SIZES: {[index: string]: {[index: number]: PacketSize}} = {
  motion: {2024: 1349, 2023: 1349, 2022: 1464},
  session: {2024: 753, 2023: 644, 2022: 632},
  lapData: {2024: 1285, 2023: 1131, 2022: 972},
  event: {2024: 45, 2023: 45, 2022: 40},
  participants: {2024: 1350, 2023: 1306, 2022: 1257},
  carSetups: {2024: 1133, 2023: 1107, 2022: 1102},
  carTelemetry: {2024: 1352, 2023: 1352, 2022: 1347},
  carStatus: {2024: 1239, 2023: 1239, 2022: 1058},
  finalClassification: {2024: 1020, 2023: 1020, 2022: 1015},
  lobbyInfo: {2024: 1306, 2023: 1218, 2022: 1191},
  carDamage: {2024: 953, 2023: 953, 2022: 948},
  sessionHistory: {2024: 1460, 2023: 1460, 2022: 1155},
  tyreSets: {2024: 231, 2023: 231},
  motionEx: {2024: 237, 2023: 217},
  timeTrial: {2024: 101},
};
