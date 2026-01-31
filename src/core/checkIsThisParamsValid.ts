import validParamsForApp from "../utils/validParamsForApp";
import Matrix from "./Matrix";
/**
 * Перевіряє чи валідні параметри задані користувачем.
 * Якщо ні, викидає помилку InvalideParamsForAppError.
 * @param {Matrix} matrix - параметри даної матртиці
 */
const checkIsThisParamsValide = (matrix: Matrix) => {
  if (!isValideParamsForApp(matrix)) {
    throw new InvalideParamsForAppError(
      "Your params are not valide (according to the autor)",
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
    validParamsForApp.rowMoreThen &&
    matrix.rows < validParamsForApp.rowMoreThen
  ) {
    return false;
  }
  if (
    validParamsForApp.columnMoreThen &&
    matrix.columns < validParamsForApp.columnMoreThen
  ) {
    return false;
  }
  if (
    validParamsForApp.rowLessThen &&
    matrix.rows > validParamsForApp.rowLessThen
  ) {
    return false;
  }
  if (
    validParamsForApp.columnLessThen &&
    matrix.columns > validParamsForApp.columnLessThen
  ) {
    return false;
  }
  if (validParamsForApp.fps && matrix.fps !== validParamsForApp.fps) {
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
