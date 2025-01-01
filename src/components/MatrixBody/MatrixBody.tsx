import React from "react";
import useMatrix from "../../utils/hooks/useMatrix";
import AppBody from "../AppBody";
import { MatrixBodyStyle } from "./MatrixBodyStyle";
import "./MatrixBodyStyle.css";

/**
 * Основне тіло матриці.
 * @param {paramsForMatrix} parama - параметри для матриці.
 */
const MatrixBody = (): JSX.Element => {
  const [matrix, [matrixBody, setMatrixBody]] = useMatrix();
  return (
    <div className="matrix" style={MatrixBodyStyle} data-testid="matrix">
      <AppBody
        matrix={matrix}
        matrixBody={matrixBody}
        printer={setMatrixBody}
      />
    </div>
  );
};

export default MatrixBody;
