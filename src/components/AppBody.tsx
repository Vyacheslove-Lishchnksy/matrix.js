import React, { useEffect } from "react";
import Matrix from "../core/Matrix";
import Pixsel from "./Pixel/Pixel";
import { backgroundColor } from "../core/intefases";
import { before, draw } from "../app/main";
import checkIsThisParamsValide from "../core/checkIsThisParamsValide";

interface propsForAppBody {
  matrix: Matrix;
  matrixBody: backgroundColor[];
  printer: React.Dispatch<React.SetStateAction<backgroundColor[]>>;
}

export interface drawFunctionArgumants {
  matrix: Matrix;
  printer: React.Dispatch<React.SetStateAction<backgroundColor[]>>;
  pressNow: string;
}

let pressNow: string = "";

const AppBody = ({
  matrix,
  matrixBody,
  printer,
}: propsForAppBody): JSX.Element => {
  const handleKeyDown = async (event: KeyboardEvent) => {
    pressNow = event.code;
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    checkIsThisParamsValide(matrix);
    before({ matrix, printer, pressNow });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      draw({ matrix, printer, pressNow });
      printer([...matrix.body]);
      pressNow = "";
    }, matrix.timeFrame);

    return () => clearInterval(interval);
  }, [matrix, printer]);

  return (
    <>
      {matrixBody.map((style, index) => (
        <Pixsel key={index} color={style} />
      ))}
    </>
  );
};

export default AppBody;
