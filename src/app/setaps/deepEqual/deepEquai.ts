
function deepEqual(obj1: Object, obj2: Object) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

export function deepEqualIsIn(array: Object[], obj: Object) {
  let result = false;
  array.forEach((element) => {
    if (deepEqual(element, obj)) {
      result = true;
    }
  });
  return result;
}

export default deepEqual;