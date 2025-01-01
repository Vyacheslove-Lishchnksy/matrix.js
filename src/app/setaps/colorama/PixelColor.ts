import { backgroundColor } from "../../../surse/intefases";
import getRandom from "../ramdom/getRandom";

export interface rgbParams {
  red: number;
  green: number;
  blue: number;
  alpha?: number;
}

export interface hexParams {
  red: string;
  green: string;
  blue: string;
  alpha?: string;
}
/**
 * Ковертує параметри RGBA в backgroundColor.
 * @param {rgbParams} { red, green, blue, alpha } - Параметри rgba.
 * @returns {backgroundColor}
 */
export const convertRgbToPixelColor = ({
  red,
  green,
  blue,
  alpha,
}: rgbParams): backgroundColor => {
  if (alpha) {
    return { background: `rgba(${red}, ${green}, ${blue}, ${alpha})` };
  } else {
    return { background: `rgba(${red}, ${green}, ${blue}, ${1})` };
  }
};
/**
 * Ковертує параметри HEX в backgroundColor.
 * @param {hexParams} { red, green, blue, alpha } - Параметри rgba.
 * @returns {backgroundColor}
 */
export const convertHexToPixelColor = ({
  red,
  green,
  blue,
  alpha,
}: hexParams): backgroundColor => {
  if (alpha) {
    return { background: `#${red}${green}${blue}${alpha}` };
  } else {
    return { background: `#${red}${green}${blue}` };
  }
};

/**
 * Видає випадкові параметри RGB.
 * @returns {rgbParams}
 */
export const getRandomRgb = (): rgbParams => {
  const red: number = getRandom(0, 256);
  const green: number = getRandom(0, 256);
  const blue: number = getRandom(0, 256);
  return { red, green, blue };
};
/**
 * Видає випадковий backgroundColor.
 * @returns {backgroundColor}
 */
export const getRandomBackGroundColor = (): backgroundColor => {
  return convertRgbToPixelColor(getRandomRgb());
};
