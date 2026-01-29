import { paramsForMatrix } from "../utils/constants";

export const isSquareMatrix = ({ columns, rows }: paramsForMatrix) => {
  return columns === rows;
};

type deviationMatrix = "height" | "width" | "none";

export const getDeviationMatrix = (
  params: paramsForMatrix
): deviationMatrix => {
  if (isSquareMatrix(params)) {
    return "none";
  }
  return params.columns > params.rows ? "width" : "height";
};
