import { matrixParams } from "../../utils/constants";

export const PixelStyle = {
  margin: "0",
  width: `calc(min(92dvh, 92dvw) / ${matrixParams.columns})`,
  height: `calc(min(92dvh, 92dvw) / ${matrixParams.rows})`,
  BoxSizing: "border-box",
  border: "solid",
  borderWidth: "min(0.2vw, 2px)",
  borderRadius: "min(2vw, 0.7em)"
}