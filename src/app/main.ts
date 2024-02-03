import { drawFunctionArgumants } from "../components/AppBody";
import { getRandomBackGroundColor } from "./setaps/colorama/pixelColor";
import { drawCircle } from "./setaps/drawer/drawer";

export const before = ({ matrix, matrixBody }: drawFunctionArgumants) => {

}

export const draw = ({ matrix, matrixBody }: drawFunctionArgumants) => {
  drawCircle(matrix, matrixBody, { center: { x: 7.5, y: 7.5 }, radius: 6, fill: getRandomBackGroundColor() });
};
