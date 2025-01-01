import { ICounterFrames } from "./ICounterFrames";

export class CounterFrames implements ICounterFrames {
  private startTime: number = 0;
  private elapsedTime: number = 0;
  private isRunning: boolean = false;
  private fps: number;

  constructor(matrix: { fps: number }) {
    this.fps = matrix.fps;
  }

  public getFramesIn(seconds: number): number {
    return seconds * this.fps;
  }
}
