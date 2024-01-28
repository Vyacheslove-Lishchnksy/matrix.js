import { backgroundColor } from "../../surse/intefases";
import { PixelStyle } from "./PixelStyle";
import "./PixelStyle.css"
interface propsForPixel {
  color: backgroundColor,
}

const Pixsel = ({ color }: propsForPixel) => {
  return (
    <div className="pixel" style={{ ...PixelStyle, ...color }}>
    </div>
  );
};

export default Pixsel;