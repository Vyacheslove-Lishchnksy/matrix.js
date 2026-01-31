import { white } from "../utils/libs/colorama/colors";
import Matrix from "../core/Matrix";
import {
  MatrixAdaptCoordinateError,
  MatrixParamsError,
} from "../core/MatrixErrors";
import { coordinate } from "../core/intefaces";

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

export const valideCoordinate: coordinate = { x: 5, y: 6 };
export const zeroCoordinate: coordinate = { x: 0, y: 0 };
export const maxCoordinate: coordinate = { x: 15, y: 15 };
export const invalideCoordinate: coordinate = { x: 19, y: 17 };

describe("lenhgt tests", () => {
  test("valide value", () => {
    const matrix = new Matrix(matrixParamsTest);
    expect(matrix.lenght).toBe(256);
  });
  test("zero value", () => {
    const matrix = new Matrix(zeroParamsTest);
    expect(matrix.lenght).toBe(0);
  });
  test("big value", () => {
    const matrix = new Matrix(bigParamsTest);
    expect(matrix.lenght).toBe(4_096);
  });
  test("invalid value", () => {
    expect(() => {
      const matrix = new Matrix(invalidParamsTest);
      matrix.adaptCoordinate({ x: 3, y: 7 });
    }).toThrow(MatrixParamsError);
  });
});

describe("adaptCoordinate tests", () => {
  const matrix = new Matrix(matrixParamsTest);
  test("adaptCoordinate valide value", () => {
    expect(matrix.adaptCoordinate(valideCoordinate)).toBe(101);
  });
  test("adaptCoordinate zero value", () => {
    expect(matrix.adaptCoordinate(zeroCoordinate)).toBe(0);
  });
  test("adaptCoordinate max value", () => {
    expect(matrix.adaptCoordinate(maxCoordinate)).toBe(255);
  });
  test("adaptCoordinate invalide value", () => {
    expect(() => matrix.adaptCoordinate(invalideCoordinate)).toThrow(
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
