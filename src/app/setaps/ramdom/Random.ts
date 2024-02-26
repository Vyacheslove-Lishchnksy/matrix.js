class Random {
  private a: number = 1664525;
  private c: number = 1013904223;
  private m: number = 2 ** 32;
  private seed: number = 0;

  constructor(userSeed: number) {
    this.makeSeed(userSeed);
  }

  private makeSeed(seed: number) {
    this.seed = (this.a * seed + this.c);
  }

  public getRandom(): number {
    const randomNumber = (this.seed % this.m);
    this.makeSeed(randomNumber);
    return randomNumber / this.m;
  }

  public giveNewRandomParams({ a, c, m }: randomParams) {
    if (a) {
      this.a = a;
    }
    if (c) {
      this.c = c;
    }
    if (m) {
      this.c = m;
    }
  }

}

export interface randomParams {
  a?: number;
  c?: number;
  m?: number;
}

export default Random;