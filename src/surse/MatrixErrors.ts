export class MatrixParamsError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "MatrixParamsError";
  }
}
export class MatrixAdaptCoordinateError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "MatrixAdaptCoordinateError";
  }
}