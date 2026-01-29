import valideParamsForApp from "../utils/valideParamseForApp";
import Matrix from "./Matrix";
/**
 * Перевіряє чи валідні параметри задані користувачем.
 * Якщо ні, викидає помилку InvalideParamsForAppError.
 * @param {Matrix} matrix - параметри даної матртиці
 */
const checkIsThisParamsValide = (matrix: Matrix) => {
  if (!isValideParamsForApp(matrix)) {
    throw new InvalideParamsForAppError(
      "Your params are not valide (according to the autor)"
    );
  }
};
/**
 * Перевіряє чи валідні параметри.
 * @param matrix - параметри даної матртиці
 * @returns {boolean}
 */
const isValideParamsForApp = (matrix: Matrix): boolean => {
  if (
    valideParamsForApp.rowMoreThen &&
    matrix.rows < valideParamsForApp.rowMoreThen
  ) {
    return false;
  }
  if (
    valideParamsForApp.colunMoreThen &&
    matrix.columns < valideParamsForApp.colunMoreThen
  ) {
    return false;
  }
  if (
    valideParamsForApp.rowLessThen &&
    matrix.rows > valideParamsForApp.rowLessThen
  ) {
    return false;
  }
  if (
    valideParamsForApp.colunLessThen &&
    matrix.columns > valideParamsForApp.colunLessThen
  ) {
    return false;
  }
  if (valideParamsForApp.fps && matrix.fps !== valideParamsForApp.fps) {
    return false;
  }
  return true;
};

class InvalideParamsForAppError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InvalideParamsForAppError";
  }
}

export default checkIsThisParamsValide;
