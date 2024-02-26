import { useState } from "react";
import { backgroundColor } from "../../surse/intefases";
import { matrixParams } from "../constants";
import Matrix from "../../surse/Matrix";

type useMatrixResult = [Matrix, [backgroundColor[], React.Dispatch<React.SetStateAction<backgroundColor[]>>]]

const matrix = new Matrix(matrixParams)

const useMatrix = (): useMatrixResult => {
  return [matrix, useState(matrix.body)]
}

export default useMatrix;