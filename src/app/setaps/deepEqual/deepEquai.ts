
function deepEqual(obj1: Object, obj2: Object) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

export function deepEqualIsIn(array: Object[], obj: Object) {
  array.forEach((element) => {
    if (deepEqual(element, obj)) {
      return true;
    }
  });
  return false;
}

export default deepEqual;