import { backgroundColor, coordinate } from "../../../core/interfaces";

export interface IDrawerOptionsParams {
  position: coordinate;
  fill: backgroundColor;
}

export interface IIntegerParams extends IDrawerOptionsParams {
  between?: number;
}
export type Template = number[][];
