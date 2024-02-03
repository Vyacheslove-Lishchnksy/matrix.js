import { backgroundColor } from "../../../surse/intefases";
import getRandom from "../ramdom/getRandom";

export interface rgbParams {
  red: number,
  green: number,
  blue: number,
  alpha?: number,
}

export const convertRgbToPixelColor = ({ red, green, blue, alpha }: rgbParams): backgroundColor => {
  if (alpha) {
    return { background: `rgba(${red}, ${green}, ${blue}, ${alpha})` };
  } else {
    return { background: `rgba(${red}, ${green}, ${blue}, ${1})` };
  };
};


export const getRandomRgb = (): rgbParams => {
  const red: number = getRandom(0, 256);
  const green: number = getRandom(0, 256);
  const blue: number = getRandom(0, 256);
  return { red, green, blue };
}

export const getRandomBackGroundColor = (): backgroundColor => {
  return convertRgbToPixelColor(getRandomRgb());
}
