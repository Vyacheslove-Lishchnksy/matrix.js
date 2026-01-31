import { backgroundColor } from "../../../core/interfaces";
import Matrix from "../../../core/Matrix";
import { Template } from "./interfaces";

interface templateParams {
  position: { x: number; y: number };
  fill: backgroundColor;
}

function drawByTemplate(
  matrix: Matrix,
  template: Template,
  { position, fill }: templateParams,
) {
  template.forEach((row, y) => {
    row.forEach((element, x) => {
      if (element) {
        matrix.drawer.drawPixel({ x: x + position.x, y: y + position.y }, fill);
      }
    });
  });
}

export default drawByTemplate;
