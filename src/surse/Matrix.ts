import { paramsForMatrix } from "../utils/constants";
import { backgroundColor, coordinate } from "./intefases";
import matrixDrawer from "./matrixDrawer";

export default class Matrix {
  private startX: number = 0;
  private fps: number;
  private colorPixelOff: backgroundColor = { background: `rgba(${23}, ${23}, ${23}, ${1})` };
  public body: Array<backgroundColor> = [];
  public coluns: number = 0;
  public rows: number = 0;
  public lenght: number;
  public drawer: matrixDrawer;
  public timeFrame: number;

  constructor(params: paramsForMatrix) {
    this.coluns = params.coluns;
    this.rows = params.rows;
    this.lenght = this.coluns * this.rows;
    this.drawer = new matrixDrawer(this);
    this.fps = params.fps;
    this.timeFrame = 1000 / this.fps;


    for (let x = this.startX; x < this.lenght; x++) {
      this.body.push(this.colorPixelOff);
    }
  }

  public adaptCoordinate = ({ x, y }: coordinate): number => {
    const errorResalt: number = -1;

    if (this.coluns > x && this.rows > y) {
      return this.coluns * y + x;
    } else {
      return errorResalt;
    };
  };

  public off = (matrixBody: Array<backgroundColor>): void => {
    this.drawer.filling(matrixBody, this.colorPixelOff);
  }
}


;

