import Matrix from "../../../core/Matrix";
import { coordinate } from "../../../core/intefases";
import Random from "./Random";

const random = new Random(Date.now());

export const getRandom = (low: number, hight: number): number => {
  return Math.floor(random.getRandom() * (hight - low)) + low;
};

export const getJSRandom = (low: number, hight: number): number => {
  return Math.floor(Math.random() * (hight - low)) + low;
};

export const getRandomDotOnMatrix = (matrix: Matrix): coordinate => {
  return { x: getRandom(0, matrix.columns), y: getRandom(0, matrix.rows) };
};

export default getRandom;
