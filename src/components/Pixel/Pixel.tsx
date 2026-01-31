import { backgroundColor } from "../../core/interfaces";
import { PixelStyle } from "./PixelStyle";
import "./PixelStyle.css";
interface propsForPixel {
  color: backgroundColor;
}

const Pixel = ({ color }: propsForPixel) => {
  return (
    <div
      className="pixel"
      style={{ ...PixelStyle, ...color }}
      data-testid="pixel"
    ></div>
  );
};

export default Pixel;
