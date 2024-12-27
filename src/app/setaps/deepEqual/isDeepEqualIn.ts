import { isDeepEqual } from "./isDeepEqual";

export function isDeepEqualIn(array: Record<string, any>[], obj: Record<string, any>) {
  let result = true;

  array.forEach((item) => {
    if (!result) {
      return result;
    }
    result = isDeepEqual(item, obj)
  })

  return result;
}