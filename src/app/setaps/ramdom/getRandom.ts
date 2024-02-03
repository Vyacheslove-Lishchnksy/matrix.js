import Matrix from "../../../surse/Matrix";
import { coordinate } from "../../../surse/intefases";

const getRandom = (low: number, hight: number): number => {
  return Math.floor(Math.random() * (hight - low)) + low;
}

export const getRandomDotOnMatrix = (matrix: Matrix): coordinate => {
  return { x: getRandom(0, matrix.coluns), y: getRandom(0, matrix.rows) }
}

export default getRandom;