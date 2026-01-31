import { act, render, renderHook, screen } from "@testing-library/react";
import { matrixParams } from "../utils/constants";
import App from "../App";
import useMatrix from "../utils/hooks/useMatrix";
import { validCoordinate } from "./jestTests.test";
import { white } from "../utils/libs/colorama/colors";
import { convertRgbToPixelColor } from "../utils/libs/colorama/PixelColor";

const colorOfMatrixOff = convertRgbToPixelColor({
  red: 23,
  green: 23,
  blue: 23,
});

describe("Matrix render test", () => {
  test("render test", () => {
    render(<App />);
    const matrix = screen.getByTestId("matrix");
    expect(matrix).toBeInTheDocument();
    expect(matrix).toMatchSnapshot();
  });
  test("pixel test", () => {
    render(<App />);
    const pixels = screen.getAllByTestId("pixel");
    expect(pixels.length).toBe(matrixParams.columns * matrixParams.rows);
    expect(pixels[0]).toMatchSnapshot();
  });
});

describe("Hook tests", () => {
  test("useMatrix", () => {
    const { result } = renderHook(() => {
      return useMatrix();
    });
    const [matrix, [matrixBody, setMatrixBody]] = result.current;
    act(() => {
      setMatrixBody([...matrixBody]);
    });
    matrix.drawer.drawPixel(validCoordinate, white);
    expect(matrixBody[101]).toEqual(white);
  });
  test("matrix off test", () => {
    const { result } = renderHook(() => {
      return useMatrix();
    });
    const [matrix, [matrixBody, setMatrixBody]] = result.current;
    act(() => {
      setMatrixBody([...matrixBody]);
    });
    matrix.off();
    expect(matrix.tester.isFilling(colorOfMatrixOff)).toBe(true);
  });
});
