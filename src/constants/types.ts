export interface Team {
  name: string;
  color: string;
}

export interface Driver {
  firstName: string;
  lastName: string;
  abbreviation: string;
}

export interface Track {
  name: string;
  lat: number;
  lon: number;
}

export interface Formula {
  name: string;
  weight: number;
}

export type EventCode = string;

export interface Coordinate {
  x: number;
  y: number;
}

export interface Tyre {
  color: string;
  name: string;
}

export type Packet = string;

export type PacketSize = number;

export interface SessionTypes {
  short: string;
  long: string;
}
