import Matrix from "../../../core/Matrix";
import { backgroundColor, coordinate } from "../../../core/intefaces";
import Integer from "./Integer";

const DEFAULT_FOUNT_WIDTH = 4;

interface integerParams {
  position: coordinate;
  fill: backgroundColor;
  between?: number;
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
export const drawNumber = (
  matrix: Matrix,
  int: number,
  { position, fill }: integerParams,
) => {
  Integer.numbers[int].forEach((row, y) => {
    row.forEach((element, x) => {
      if (element) {
        matrix.drawer.drawPixel({ x: position.x + x, y: position.y + y }, fill);
      }
    });
  });
};

export const drawDozens = (
  matrix: Matrix,
  int: number,
  { position, fill, between }: integerParams,
) => {
  drawNumber(matrix, (int - (int % 10)) / 10, { position, fill });
  drawNumber(matrix, int % 10, {
    position: {
      x: position.x + DEFAULT_FOUNT_WIDTH + (between ?? 2),
      y: position.y,
    },
    fill,
  });
};
