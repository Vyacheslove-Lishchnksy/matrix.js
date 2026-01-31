import deepEqual, { deepEqualIsIn } from "../utils/libs/deepEqual/deepEqual";
import Matrix from "./Matrix";
import { backgroundColor } from "./intefaces";
/**
 * Модуль відповідальний за перевірку даних матриці
 */
class MatrixTaster {
  private matrix: Matrix;
  constructor(matrix: Matrix) {
    this.matrix = matrix;
  }
  /**
   * Запитує чи є хоч один піксель відповідного кольору.
   * @param {backgroundColor[]} matrixBody - тіло на якому буде малюватися піксель
   * @param {backgroundColor} pixelColor - колір який буде шукатися.
   * @returns {boolean}
   */
  public isHas(pixelColor: backgroundColor): boolean {
    return deepEqualIsIn(this.matrix.body, pixelColor);
  }
  /**
   * Запитує чи заповнена матриця відповідним кольором.
   * @param {backgroundColor[]} matrixBody - тіло на якому буде малюватися піксель
   * @param {backgroundColor} pixelColor - колір який буде шукатися.
   * @returns {boolean}
   */
  public isFilling(pixelColor: backgroundColor): boolean {
    let result = true;
    this.matrix.body.forEach((element) => {
      if (!deepEqual(element, pixelColor)) {
        result = false;
      }
    });
    return result;
  }
}

export default MatrixTaster;
