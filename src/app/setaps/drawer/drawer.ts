import Matrix from "../../../surse/Matrix";
import { backgroundColor, coordinate } from "../../../surse/intefases";

interface circleParams {
  center: coordinate,
  radius: number,
  fill: backgroundColor
}

const isDotInCircle = (center: coordinate, dot: coordinate, radius: number): boolean => {
  if ((dot.x - center.x) ** 2 + (dot.y - center.y) ** 2 <= radius ** 2) {
    return true;
  } else {
    return false;
  }
}

export const drawCircle = (matrix: Matrix, matrixBody: backgroundColor[], { center, radius, fill }: circleParams) => {
  for (let x = 0; x < matrix.coluns; x++) {
    for (let y = 0; y < matrix.rows; y++) {
      if (isDotInCircle(center, { x, y }, radius)) {
        matrix.drawer.drawPixel(matrixBody, { x, y }, fill);
      }
    }
  }
}