import Matrix from "./Matrix";
import { backgroundColor, coordinate } from "./intefases";

export default class matrixDrawer {
  private startX: number = 0;
  private matrix: Matrix;

  constructor(matrix: Matrix) {
    this.matrix = matrix;
  }

  public drawPixel = (matrixBody: Array<backgroundColor>, { x, y }: coordinate, fill: backgroundColor) => {
    const matrixCoordinate: number = this.matrix.adaptCoordinate({ x, y });

    if (matrixCoordinate >= this.startX) {
      matrixBody[matrixCoordinate] = fill;
      return;
    } else {
      return;
    };
  };

  public filling = (matrixBody: Array<backgroundColor>, fill: backgroundColor): void => {
    for (let x = this.startX; x < this.matrix.lenght; x++) {
      matrixBody[x] = fill;
    }

  };

}
