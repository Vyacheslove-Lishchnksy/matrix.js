import React, { useEffect } from "react";
import Matrix from "../surse/Matrix";
import Pixsel from "./Pixel/Pixel";
import { backgroundColor } from "../surse/intefases";
import { before, draw } from "../app/main";
import checkIsThisParamsValide from "../surse/checkIsThisParamsValide";

interface propsForAppBody {
  matrix: Matrix;
  matrixBody: backgroundColor[];
  printer: React.Dispatch<React.SetStateAction<backgroundColor[]>>;
}

export interface drawFunctionArgumants {
  matrix: Matrix;
  printer: React.Dispatch<React.SetStateAction<backgroundColor[]>>;
  pressNow: number;
}

let pressNow: number = -1;

const AppBody = ({ matrix, matrixBody, printer }: propsForAppBody): JSX.Element => {
  const handleKeyDown = async (event: KeyboardEvent) => {
    pressNow = event.keyCode
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    checkIsThisParamsValide(matrix)
    before({ matrix, printer, pressNow });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  useEffect(() => {
    const interval = setInterval(() => {
      draw({ matrix, printer, pressNow });
      printer([...matrix.body])
      pressNow = -1;
    }, matrix.timeFrame);

    return () => clearInterval(interval);
  }, [matrix, printer])



  return (
    <>
      {
        matrixBody.map((style, index) => (
          <Pixsel key={index} color={style} />
        ))
      }
    </>
  )

}

export default AppBody;