import { backgroundColor } from "../../../surse/intefases";
import { convertHexToPixelColor } from "./PixelColor";

export const white: backgroundColor = convertHexToPixelColor({
  red: "e2",
  green: "e2",
  blue: "e2",
});

export const gray: backgroundColor = convertHexToPixelColor({
  red: "23",
  green: "23",
  blue: "23",
});

export const black: backgroundColor = convertHexToPixelColor({
  red: "00",
  green: "00",
  blue: "00",
});

export const red: backgroundColor = convertHexToPixelColor({
  red: "ff",
  green: "00",
  blue: "00",
});

export const green: backgroundColor = convertHexToPixelColor({
  red: "00",
  green: "ff",
  blue: "00",
});

export const blue: backgroundColor = convertHexToPixelColor({
  red: "00",
  green: "00",
  blue: "ff",
});

export const yellow: backgroundColor = convertHexToPixelColor({
  red: "ff",
  green: "ff",
  blue: "00",
});

export const violet: backgroundColor = convertHexToPixelColor({
  red: "ff",
  green: "00",
  blue: "ff",
});

export const turquoise: backgroundColor = convertHexToPixelColor({
  red: "00",
  green: "ff",
  blue: "ff",
});
