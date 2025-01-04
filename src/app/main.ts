import { drawFunctionArgumants } from "../components/AppBody";
import { white } from "./setaps/colorama/colors";
import { drawDozens } from "./setaps/drawer/numbers";

export const before = ({ matrix }: drawFunctionArgumants) => {
  matrix.off();
};

let frameCounter = 0;
let iterator = 0;

export const draw = ({ matrix }: drawFunctionArgumants) => {
  matrix.off();

  drawDozens(
    matrix,
    iterator, // Цифра яка буде намальована,
    {
      position: {
        x: matrix.columns / 2 - 5,
        y: matrix.rows / 2 - 4,
      }, //Позиція відносно лівого верхнього кута
      fill: white, //Колір цифр
    }
  );

  // Треба домножати на те скільки секунд треба чекати
  if (frameCounter === matrix.fps * 1) {
    iterator++;
    frameCounter = 0;
  }

  if (iterator > 99) {
    iterator = 0;
  }

  frameCounter++;
};
