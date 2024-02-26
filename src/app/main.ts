import { drawFunctionArgumants } from "../components/AppBody";
import { white } from "./setaps/colorama/colors";
import { drawDozens } from "./setaps/drawer/numbers";

export const before = ({ matrix }: drawFunctionArgumants) => {
}

let frameCounter = 0;
let iterator = 0;

export const draw = ({ matrix }: drawFunctionArgumants) => {
  matrix.off();
  drawDozens(matrix, iterator, { position: { x: 3, y: 4 }, fill: white })
  if (frameCounter === 3) {
    iterator++
    frameCounter = 0
  }
  if (iterator > 99) {
    iterator = 0;
  }
  frameCounter++
};
