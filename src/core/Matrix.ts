import { paramsForMatrix } from "../utils/constants";
import { MatrixParamsError } from "./MatrixErrors";
import { backgroundColor } from "./interfaces";
import MatrixDrawer from "./MatrixDrawer";
import MatrixTaster from "./MatrixTester";

export default class Matrix {
  private startX: number = 0;
  public colorPixelOff: backgroundColor = {
    background: `rgba(${23}, ${23}, ${23}, ${1})`,
  };
  public body: Array<backgroundColor> = [];
  public fps: number;
  public columns: number = 0;
  public rows: number = 0;
  public length: number;
  public drawer: MatrixDrawer;
  public tester: MatrixTaster;
  public timeFrame: number;

  constructor(params: paramsForMatrix) {
    if (params.columns >= 0 && params.rows >= 0 && params.fps >= 0) {
      this.columns = params.columns;
      this.rows = params.rows;
      this.length = this.columns * this.rows;
      this.drawer = new MatrixDrawer(this);
      this.tester = new MatrixTaster(this);
      this.fps = params.fps;
      this.timeFrame = 1000 / this.fps;

      for (let x = this.startX; x < this.length; x++) {
        this.body.push(this.colorPixelOff);
      }
    } else {
      throw new MatrixParamsError("Invalid params");
    }
  }

  public off = (): void => {
    this.drawer.filling(this.colorPixelOff);
  };
}
