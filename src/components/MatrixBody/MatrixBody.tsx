import React from "react";
import useMatrix from "../../utils/hooks/useMatrix";
import { paramsForMatrix } from "../../utils/constants";
import AppBody from "../AppBody";
import { MatrixBodyStyle } from "./MarginBodyStyle";
import "./MatrixBodyStyle.css"

interface propsForMatrixBody {
  params: paramsForMatrix;
}

const MatrixBody = ({ params }: propsForMatrixBody): JSX.Element => {
  const [matrix, [matrixBody, setMatrixBody]] = useMatrix(params);
  return (
    <div className="matrix" style={MatrixBodyStyle}>
      <AppBody matrix={matrix} matrixBody={matrixBody} printer={setMatrixBody} />
    </div>
  )
}

export default MatrixBody;