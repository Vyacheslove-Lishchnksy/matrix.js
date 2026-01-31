import Matrix from "../../../core/Matrix";
import { backgroundColor, coordinate } from "../../../core/interfaces";

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
