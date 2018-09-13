import { TURN_ON, TURN_OFF } from './types';

export const turnOn = (roomType) => ({
  type: TURN_ON,
  roomType
});

export const turnOff = (roomType) => ({
  type: TURN_OFF,
  roomType
});