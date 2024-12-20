export const logWraped = (fun: Function) => {
  return (args: any) => {
    const result = fun(...args);
    console.log(args, result);
    return result;
  }
}