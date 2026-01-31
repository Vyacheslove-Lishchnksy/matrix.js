import Matrix from "../../../core/Matrix";
import { backgroundColor, coordinate } from "../../../core/intefaces";

interface circleParams {
  center: coordinate;
  radius: number;
  fill: backgroundColor;
}

const isPointOfCircle = (
  center: coordinate,
  dot: coordinate,
  radius: number,
): boolean => {
  if ((dot.x - center.x) ** 2 + (dot.y - center.y) ** 2 <= radius ** 2) {
    return true;
  } else {
    return false;
  }
};
/**
 * Малює коло на матриці
 * @param {Matrix} matrix - об'єкт матриці
 * @param {circleParams} - {
 * {coordinate} center - центер кола
 * {number} radius - радіус кола
 * {backgroundColor} fill - колір кола
 * }
 */
export const drawCircle = (
  matrix: Matrix,
  { center, radius, fill }: circleParams,
) => {
  for (let x = 0; x < matrix.columns; x++) {
    for (let y = 0; y < matrix.rows; y++) {
      if (isPointOfCircle(center, { x, y }, radius)) {
        matrix.drawer.drawPixel({ x, y }, fill);
      }
    }
  }
};
