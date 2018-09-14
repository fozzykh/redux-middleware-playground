import { TURN_ON_ASYNC, TURN_OFF } from './types';

export const turnOn = (roomType) => ({
  type: TURN_ON_ASYNC,
  roomType
});

export const turnOff = (roomType) => ({
  type: TURN_OFF,
  roomType
});
