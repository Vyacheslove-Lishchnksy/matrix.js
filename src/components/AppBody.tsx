import React, { useEffect, useRef } from "react";
import Matrix from "../core/Matrix";
import Pixel from "./Pixel/Pixel";
import { backgroundColor } from "../core/interfaces";
import { before, draw } from "../app/main";
import checkIsThisParamsValid from "../core/checkIsThisParamsValid";

interface propsForAppBody {
  matrix: Matrix;
  matrixBody: backgroundColor[];
  printer: React.Dispatch<React.SetStateAction<backgroundColor[]>>;
}

export interface drawFunctionArguments {
  matrix: Matrix;
  printer: React.Dispatch<React.SetStateAction<backgroundColor[]>>;
  pressNow: string;
  writeNow: string;
}

const AppBody = ({
  matrix,
  matrixBody,
  printer,
}: propsForAppBody): JSX.Element => {
  const pressNow = useRef("");
  const writeNow = useRef("");

  const handleKeyDown = async (event: KeyboardEvent) => {
    pressNow.current = event.code;
    writeNow.current = event.key;
  };

  const handleKeyUp = async () => {
    pressNow.current = "";
    writeNow.current = "";
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    checkIsThisParamsValid(matrix);
    before({
      matrix,
      printer,
      pressNow: pressNow.current,
      writeNow: writeNow.current,
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      draw({
        matrix,
        printer,
        pressNow: pressNow.current,
        writeNow: writeNow.current,
      });
      printer([...matrix.body]);
      pressNow.current = "";
    }, matrix.timeFrame);

    return () => clearInterval(interval);
  }, [matrix, printer]);

  return (
    <>
      {matrixBody.map((style, index) => (
        <Pixel key={index} color={style} />
      ))}
    </>
  );
};

export default AppBody;
