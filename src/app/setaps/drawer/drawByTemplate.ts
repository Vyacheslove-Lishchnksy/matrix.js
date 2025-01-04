import { backgroundColor } from "../../../surse/intefases";
import Matrix from "../../../surse/Matrix";

interface templateParams {
  position: { x: number; y: number };
  fill: backgroundColor;
}

function drawByTemplate(
  matrix: Matrix,
  tenplate: number[][],
  { position, fill }: templateParams
) {
  tenplate.forEach((row, y) => {
    row.forEach((element, x) => {
      if (element) {
        matrix.drawer.drawPixel({ x: x + position.x, y: y + position.y }, fill);
      }
    });
  });
}

export default drawByTemplate;
