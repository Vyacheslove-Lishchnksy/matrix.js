import React, { useEffect } from "react";
import Matrix from "../surse/Matrix";
import Pixsel from "./Pixel/Pixel";
import { backgroundColor } from "../surse/intefases";

interface propsForAppBody {
  matrix: Matrix,
  matrixBody: backgroundColor[];
  printer: React.Dispatch<React.SetStateAction<backgroundColor[]>>,
  draw: Function,
}

export interface drawFunctionArgumants {
  matrix: Matrix,
  matrixBody: backgroundColor[];
  printer: React.Dispatch<React.SetStateAction<backgroundColor[]>>,
  isWorkStart?: boolean,
}

const AppBody = ({ matrix, matrixBody, printer, draw }: propsForAppBody): JSX.Element => {
  useEffect(() => {
    const interval = setInterval(() => {
      draw({ matrix, matrixBody, printer });
      printer([...matrixBody])
    }, matrix.timeFrame);

    return () => clearInterval(interval);
  }, [draw, matrix, matrixBody, printer])

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