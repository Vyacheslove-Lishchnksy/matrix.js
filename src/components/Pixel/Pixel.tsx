import { backgroundColor } from "../../core/intefases";
import { PixelStyle } from "./PixelStyle";
import "./PixelStyle.css";
interface propsForPixel {
  color: backgroundColor;
}

const Pixsel = ({ color }: propsForPixel) => {
  return (
    <div
      className="pixel"
      style={{ ...PixelStyle, ...color }}
      data-testid="pixel"
    ></div>
  );
};

export default Pixsel;
