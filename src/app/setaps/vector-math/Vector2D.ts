class Vector2D {

  public x: number;
  public y: number;
  public lenght: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.lenght = Math.sqrt(this.x ** 2 + this.y ** 2);
  }

  toString() {
    return `[${this.x}, ${this.y}]`;
  }

  public add(vector: Vector2D) {
    this.x += vector.x;
    this.y += vector.y;
  }

  public mult(value: number) {
    this.x *= value;
    this.y *= value;
  }

  public normalize() {
    this.x /= this.lenght;
    this.y /= this.lenght;
  }

  public scalar(vector: Vector2D): number {
    return this.x * vector.x + this.y * vector.y;
  }

  public hadamard(vector: Vector2D) {
    this.x *= vector.x;
    this.y *= vector.y;
  }

  public static random() {
    return new Vector2D(Math.random(), Math.random())
  }
}

export default Vector2D;