import { drawFunctionArgumants } from "../components/AppBody";
import { convertRgbToPixelColor } from "./setaps/colorama/pixelColor";

let iterator = 0;

export const before = ({ matrix, matrixBody }: drawFunctionArgumants) => {

}

export const draw = ({ matrix, matrixBody }: drawFunctionArgumants) => {
  matrix.off(matrixBody);
  matrix.drawer.drawPixel(matrixBody, {
    x: iterator % matrix.coluns,
    y: Math.floor(iterator / matrix.coluns)
  },
    convertRgbToPixelColor({ red: 0, green: 0, blue: 180 })
  );
  iterator++;
  if (iterator > matrix.lenght) {
    iterator = 0;
  };
};
