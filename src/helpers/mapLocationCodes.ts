import {LOCATION_CODES} from '../const';

export const mapLocationCodes = (): string => {
  return LOCATION_CODES.reduce(
    (accumulator, currValue) => `${accumulator}${currValue},`,
    '',
  );
};
