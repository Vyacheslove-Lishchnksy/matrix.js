export function isDeepEqual(obj1: Record<string, any>, obj2: Record<string, any>) {
  let resault = { value: true };

  compareObjects(obj1, obj2, resault);

  return resault.value;
}

function compareObjects(obj1: Record<string, any>, obj2: Record<string, any>, result: { value: boolean }) {
  const contentOfObj1 = Object.entries(obj1);

  if (contentOfObj1.length === Object.keys(obj2).length && result.value) {
    contentOfObj1.forEach(
      ([key, value]) => {
        if (typeof value === 'object' && !Object.is(value, null)) {
          compareObjects(value, obj2[key], result);
        } else {
          if (!result.value) {
            return
          } else {
            result.value = value === obj2[key];
          }
        }
      }
    );
  } else {
    result.value = false;
    return
  }

}