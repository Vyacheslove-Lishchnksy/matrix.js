import Matrix from "./Matrix";
import { backgroundColor, coordinate } from "./intefases";
/**
 * Відповідає за малювання пікселів на матриці.
 */
export default class MatrixDrawer {
  private startX: number = 0;
  private matrix: Matrix;

  constructor(matrix: Matrix) {
    this.matrix = matrix;
  }
  /**
   * Заповнює піксель відповідним кольром.
   * @param {coordinate} { x, y } - координати точки на матриці.
   * @param {backgroundColor} fill - колір пікселю.
   * @returns {void}
   */
  public drawPixel = ({ x, y }: coordinate, fill: backgroundColor) => {
    try {
      const matrixCoordinate: number = this.matrix.adaptCoordinate({ x, y });
      this.matrix.body[matrixCoordinate] = fill;
    } catch {}
  };
  /**
   * Заповненя матриці одним кольором.
   * @param {backgroundColor} fill - колір яким буде заповнено.
   */
  public filling = (fill: backgroundColor): void => {
    for (let x = this.startX; x < this.matrix.lenght; x++) {
      this.matrix.body[x] = fill;
    }
  };
}
