import Matrix from "./Matrix";
import { MatrixAdaptCoordinateError } from "./MatrixErrors";
import { backgroundColor, coordinate } from "./interfaces";

export default class MatrixDrawer {
  private startX: number = 0;
  private matrix: Matrix;

  constructor(matrix: Matrix) {
    this.matrix = matrix;
  }

  public drawPixel = ({ x, y }: coordinate, fill: backgroundColor) => {
    try {
      const matrixCoordinate: number = this.adaptCoordinate({ x, y });
      this.matrix.body[matrixCoordinate] = fill;
    } catch (error) {
      if (error instanceof MatrixAdaptCoordinateError) {
        return;
      }
      throw error;
    }
  };

  public filling = (fill: backgroundColor): void => {
    for (let x = this.startX; x < this.matrix.length; x++) {
      this.matrix.body[x] = fill;
    }
  };

  public adaptCoordinate({ x, y }: coordinate): number {
    if (this.matrix.columns > x && this.matrix.rows > y && x >= 0 && y >= 0) {
      return this.matrix.columns * y + x;
    } else {
      throw new MatrixAdaptCoordinateError(
        "Invalid coordinate is not in matrix",
      );
    }
  }
}
