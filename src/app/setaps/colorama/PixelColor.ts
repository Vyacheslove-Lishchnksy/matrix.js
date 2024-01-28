export interface rgbParams {
  red: number,
  green: number,
  blue: number,
  alpha?: number,
}

export const convertRgbToPixelColor = ({ red, green, blue, alpha }: rgbParams) => {
  if (alpha) {
    return { background: `rgba(${red}, ${green}, ${blue}, ${alpha})` };
  } else {
    return { background: `rgba(${red}, ${green}, ${blue}, ${1})` };
  };
};