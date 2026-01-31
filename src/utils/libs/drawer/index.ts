import { backgroundColor } from "../../../core/interfaces";
import Matrix from "../../../core/Matrix";
import drawByTemplate from "./drawByTemplate";
import { IDrawerOptionsParams, IIntegerParams, Template } from "./interfaces";
import { drawLetter } from "./letters";
import { drawDozens, drawNumber } from "./numbers";

export { drawLetter } from "./letters";
export { drawDozens, drawNumber } from "./numbers";
export { drawCircle } from "./drawer";

export default class Drawer {
  private matrix: Matrix;
  constructor(matrix: Matrix) {
    this.matrix = matrix;
  }

  public drawPixel({ position, fill }: IDrawerOptionsParams) {
    this.matrix.drawer.drawPixel(position, fill);
  }

  public drawingByTemplate(
    template: Template,
    { position, fill }: IDrawerOptionsParams,
  ) {
    drawByTemplate(this.matrix, template, { position, fill });
  }

  public drawingLetter(
    letter: string,
    { position, fill }: IDrawerOptionsParams,
  ) {
    drawLetter(this.matrix, letter, { position, fill });
  }

  public drawingNumber(int: number, { position, fill }: IDrawerOptionsParams) {
    drawNumber(this.matrix, int, { position, fill });
  }

  public drawingDozens(
    int: number,
    { position, fill, between }: IIntegerParams,
  ) {
    drawDozens(this.matrix, int, { position, fill, between });
  }

  public filling(fill: backgroundColor) {
    this.matrix.drawer.filling(fill);
  }
}
