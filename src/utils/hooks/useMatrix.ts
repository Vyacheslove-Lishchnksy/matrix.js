import { useState } from "react";
import { paramsForMatrix } from "../constants";
import Matrix from "../../surse/Matrix";
import { backgroundColor } from "../../surse/intefases";

type useMatrixResult = [Matrix, [backgroundColor[], React.Dispatch<React.SetStateAction<backgroundColor[]>>]]

const useMatrix = (matrixParams: paramsForMatrix): useMatrixResult => {
  const matrix = new Matrix(matrixParams);
  return [matrix, useState(matrix.body)]
}

export default useMatrix;