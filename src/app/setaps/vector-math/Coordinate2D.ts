import { coordinate } from "../../../surse/intefases";

class Coordinate2D {
  public x: number;
  public y: number;

  constructor({ x, y }: coordinate) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return `{ x = ${this.x}, y = ${this.y}}`;
  }

  toObject() {
    return { x: this.x, y: this.y };
  }

  public toAdd(coordinate: Coordinate2D | coordinate): Coordinate2D {
    return new Coordinate2D({ x: this.x + coordinate.x, y: this.y + coordinate.y });
  }

  public toSub(coordinate: Coordinate2D | coordinate): Coordinate2D {
    return new Coordinate2D({ x: this.x - coordinate.x, y: this.y - coordinate.y });
  }

  public toMult(value: number): Coordinate2D {
    return new Coordinate2D({ x: this.x * value, y: this.y * value });
  }
}

export default Coordinate2D;