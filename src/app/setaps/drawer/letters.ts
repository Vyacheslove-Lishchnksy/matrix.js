import Matrix from "../../../surse/Matrix";
import { backgroundColor, coordinate } from "../../../surse/intefases";
import { alphabet, convertSymbolToCode } from "./Letter";

interface letterParams {
  position: coordinate;
  fill: backgroundColor;
}
/**
 * Малює задану букву 4х8
 * @param {Matrix} matrix - об'єкт матриці
 * @param {string} letter - Буква яка буде намальована
 * @param {letterParams} {position, fill} - параметри букви
 */
export const drawLetter = (
  matrix: Matrix,
  letter: string,
  { position, fill }: letterParams
) => {
  alphabet[convertSymbolToCode(letter)].forEach((row, y) => {
    row.forEach((element, x) => {
      if (element) {
        matrix.drawer.drawPixel({ x: position.x + x, y: position.y + y }, fill);
      }
    });
  });
};
