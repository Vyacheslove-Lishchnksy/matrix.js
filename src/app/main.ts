import { drawFunctionArguments } from "../components/AppBody";
import { white } from "../utils/libs/colorama/colors";
import { drawLetter } from "../utils/libs/drawer";

export const before = ({ matrix }: drawFunctionArguments) => {
  matrix.off();
};

// let frameCounter = 0;
// let iterator = 0;

export const draw = ({ matrix, writeNow }: drawFunctionArguments) => {
  // matrix.off();
  // drawDozens(matrix, iterator, {
  //   position: {
  //     x: matrix.columns / 2 - 5,
  //     y: matrix.rows / 2 - 4,
  //   },
  //   fill: white,
  // });
  // if (frameCounter === matrix.fps * 1) {
  //   iterator++;
  //   frameCounter = 0;
  // }
  // if (iterator > 99) {
  //   iterator = 0;
  // }
  // frameCounter++;

  matrix.off();
  drawLetter(matrix, writeNow, {
    position: {
      x: matrix.columns / 2 - 4,
      y: matrix.rows / 2 - 4,
    },
    fill: white,
  });
};
