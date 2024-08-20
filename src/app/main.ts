import { drawFunctionArgumants } from "../components/AppBody";
import { blue, white } from "./setaps/colorama/colors";
import { convertRgbToPixelColor } from "./setaps/colorama/pixelColor";
import { drawDozens } from "./setaps/drawer/numbers";
import { isEmoji } from "./setaps/UNICODE Tolls";

let emoji: string | null;

export const before = ({ matrix }: drawFunctionArgumants) => {
}

let frameCounter = 0;
let iterator = 0;

export const draw = ({ matrix, pressNow }: drawFunctionArgumants) => {
  matrix.off();
  if (pressNow) {
    matrix.drawer.filling(blue)
  }
  drawDozens(matrix, iterator, { position: { x: 3, y: 4 }, fill: white })
  if (frameCounter === matrix.fps) {
    iterator++
    frameCounter = 0
  }
  if (iterator > 99) {
    iterator = 0;
  }
  frameCounter++
};
