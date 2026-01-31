import { white } from "../utils/libs/colorama/colors";
import Matrix from "../core/Matrix";
import {
  MatrixAdaptCoordinateError,
  MatrixParamsError,
} from "../core/MatrixErrors";
import { coordinate } from "../core/interfaces";

const matrixParamsTest = {
  columns: 16,
  rows: 16,
  fps: 3,
};

const zeroParamsTest = {
  columns: 0,
  rows: 0,
  fps: 3,
};

const bigParamsTest = {
  columns: 64,
  rows: 64,
  fps: 3,
};

const invalidParamsTest = {
  columns: -4,
  rows: -2,
  fps: 3,
};

export const validCoordinate: coordinate = { x: 5, y: 6 };
export const zeroCoordinate: coordinate = { x: 0, y: 0 };
export const maxCoordinate: coordinate = { x: 15, y: 15 };
export const invalidCoordinate: coordinate = { x: 19, y: 17 };

describe("length tests", () => {
  test("valid value", () => {
    const matrix = new Matrix(matrixParamsTest);
    expect(matrix.length).toBe(256);
  });
  test("zero value", () => {
    const matrix = new Matrix(zeroParamsTest);
    expect(matrix.length).toBe(0);
  });
  test("big value", () => {
    const matrix = new Matrix(bigParamsTest);
    expect(matrix.length).toBe(4_096);
  });
  test("invalid value", () => {
    expect(() => {
      const matrix = new Matrix(invalidParamsTest);
      matrix.drawer.adaptCoordinate({ x: 3, y: 7 });
    }).toThrow(MatrixParamsError);
  });
});

describe("adaptCoordinate tests", () => {
  const matrix = new Matrix(matrixParamsTest);
  test("adaptCoordinate valid value", () => {
    expect(matrix.drawer.adaptCoordinate(validCoordinate)).toBe(101);
  });
  test("adaptCoordinate zero value", () => {
    expect(matrix.drawer.adaptCoordinate(zeroCoordinate)).toBe(0);
  });
  test("adaptCoordinate max value", () => {
    expect(matrix.drawer.adaptCoordinate(maxCoordinate)).toBe(255);
  });
  test("adaptCoordinate invalid value", () => {
    expect(() => matrix.drawer.adaptCoordinate(invalidCoordinate)).toThrow(
      MatrixAdaptCoordinateError,
    );
  });
});

describe("drawer test", () => {
  const matrix = new Matrix(matrixParamsTest);
  test("matrix drawer filling", () => {
    matrix.drawer.filling(white);
    expect(matrix.tester.isFilling(white)).toBe(true);
  });
});
