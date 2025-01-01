import { paramsForMatrix } from "../utils/constants";
import { MatrixAdaptCoordinateError, MatrixParamsError } from "./MatrixErrors";
import { backgroundColor, coordinate } from "./intefases";
import MatrixDrawer from "./matrixDrawer";
import MatrixTaster from "./MatrixTester";
/**
 * Головний об'єкт який відповідає за зміни в matrixBody
 */
export default class Matrix {
  private startX: number = 0;
  private colorPixelOff: backgroundColor = {
    background: `rgba(${23}, ${23}, ${23}, ${1})`,
  };
  public body: Array<backgroundColor> = [];
  public fps: number;
  public columns: number = 0;
  public rows: number = 0;
  public lenght: number;
  public drawer: MatrixDrawer;
  public tester: MatrixTaster;
  public timeFrame: number;
  /**
   * Конструюює матрицю або повертає MatrixParamsError при невалідних параметрах.
   * @param params - parans for matrix
   */
  constructor(params: paramsForMatrix) {
    if (params.columns >= 0 && params.rows >= 0 && params.fps >= 0) {
      this.columns = params.columns;
      this.rows = params.rows;
      this.lenght = this.columns * this.rows;
      this.drawer = new MatrixDrawer(this);
      this.tester = new MatrixTaster(this);
      this.fps = params.fps;
      this.timeFrame = 1000 / this.fps;

      for (let x = this.startX; x < this.lenght; x++) {
        this.body.push(this.colorPixelOff);
      }
    } else {
      throw new MatrixParamsError("Invalide params");
    }
  }
  /**
   * Adapt coordinate for matrix
   * @param {coordinate} {x, y} - user coordinate
   * @returns {number} dot in array
   */
  public adaptCoordinate({ x, y }: coordinate): number {
    if (this.columns > x && this.rows > y && x >= 0 && y >= 0) {
      return this.columns * y + x;
    } else {
      throw new MatrixAdaptCoordinateError(
        "Invalid coordinate is not in matrix"
      );
    }
  }
  /**
   * Fill in matrixBody color of pixel off
   */
  public off = (): void => {
    this.drawer.filling(this.colorPixelOff);
  };
}
