import Matrix from "../../../surse/Matrix";
import { backgroundColor, coordinate } from "../../../surse/intefases";
import Integer from "./Integer";

interface integerParams {
  position: coordinate,
  fill: backgroundColor
  betwean?: number;
}
/**
 * 
 * @param matrix - Головна матриця
 * @param int - Цифра яка має бути намальована
 * @param {integerParams} - {
 * {coordinate} position - позиція букви відносно верхнього лівого кута. 
 * {background} fill - колір яким буде заповнена цифра
 * }
 */
export const drawNumber = (matrix: Matrix, int: number, { position, fill }: integerParams) => {
  Integer.numbers[int].forEach((row, y) => {
    row.forEach((element, x) => {
      if (element) {
        matrix.drawer.drawPixel({ x: position.x + x, y: position.y + y }, fill);
      }
    })
  })
}

export const drawDozens = (matrix: Matrix, int: number, { position, fill, betwean }: integerParams) => {
  drawNumber(matrix, (int - (int % 10)) / 10, { position, fill })
  drawNumber(matrix, int % 10, { position: { x: position.x + 4 + (betwean ?? 2), y: position.y }, fill })
}