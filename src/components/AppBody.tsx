import React, { useEffect } from "react";
import Matrix from "../surse/Matrix";
import Pixsel from "./Pixel/Pixel";
import { backgroundColor } from "../surse/intefases";
import { before, draw } from "../app/main";

interface propsForAppBody {
  matrix: Matrix,
  matrixBody: backgroundColor[];
  printer: React.Dispatch<React.SetStateAction<backgroundColor[]>>,
}

export interface drawFunctionArgumants {
  matrix: Matrix,
  matrixBody: backgroundColor[];
  printer: React.Dispatch<React.SetStateAction<backgroundColor[]>>,
  isWorkStart?: boolean,
}

const AppBody = ({ matrix, matrixBody, printer }: propsForAppBody): JSX.Element => {
  let isWorkStart = false;

  useEffect(() => {
    before({ matrix, matrixBody, printer });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      draw({ matrix, matrixBody, printer });
      printer([...matrixBody])

    }, matrix.timeFrame);

    return () => clearInterval(interval);
  }, [isWorkStart, matrix, matrixBody, printer])



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