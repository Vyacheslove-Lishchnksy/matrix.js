import Random from "../random/Random";

const isUseUA: boolean = false;
const alphabet: string = "abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ";
const alphabetUA: string = isUseUA
  ? "абвгдежзійклмнопрстьюєяАБВГДЕЖЗШЙКЛМНОПРСТУФХЦЧЬЮЄЯ"
  : "";
const numbers: string = "1234567890";
const symbols: string = "!@#$%&^*()[]/\\";
const cryptoKey: string[] = (alphabet + alphabetUA + numbers + symbols).split(
  "",
);

export const conwertWordToNumber = (word: string): number => {
  const wordInArray: string[] = word.split("");
  let result: number = 0;
  wordInArray.forEach((element) => {
    result += element.charCodeAt(0);
  });
  return result;
};

export const getHash = (seed: number, length?: number): string => {
  if (!length) {
    length = 32;
  }
  const random = new Random(seed);
  const resalt: string[] = [];
  for (let i = 0; i < length; i++) {
    resalt.push(cryptoKey[Math.floor(random.getRandom() * cryptoKey.length)]);
  }
  return resalt.join("");
};
