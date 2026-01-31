import { useState } from "react";
import { backgroundColor } from "../../core/intefaces";
import { matrixParams } from "../constants";
import Matrix from "../../core/Matrix";

type useMatrixResult = [
  Matrix,
  [backgroundColor[], React.Dispatch<React.SetStateAction<backgroundColor[]>>],
];

const useMatrix = (): useMatrixResult => {
  const matrix = new Matrix(matrixParams);
  return [matrix, useState(matrix.body)];
};

export default useMatrix;
