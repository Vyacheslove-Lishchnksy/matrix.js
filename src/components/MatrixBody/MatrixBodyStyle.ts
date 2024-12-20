import { matrixParams } from "../../utils/constants";

export let widthOfPixel = `calc(min(92dvh / ${matrixParams.rows}, 92dvw / ${matrixParams.columns})`;

export const MatrixBodyStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  FlexWrap: true,
  width: `calc(${widthOfPixel} * ${matrixParams.columns})`,
  height: `calc(${widthOfPixel} * ${matrixParams.rows})`,
  background: "#000",
  border: "solid",
  borderWidth: "1dvh",
  animation: "fadeIn 1s ease-in-out"
}
