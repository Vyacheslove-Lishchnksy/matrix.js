import { matrixParams } from "../../utils/constants";

export const PixelStyle = {
  margin: "0",
  width: `calc(min(92dvh, 92dvw) / ${matrixParams.coluns})`,
  height: `calc(min(92dvh, 92dvw) / ${matrixParams.rows})`,
  BoxSizing: "border-box",
  border: "solid",
}