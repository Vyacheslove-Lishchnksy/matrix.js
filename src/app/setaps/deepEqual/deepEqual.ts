/**
 * Глибоко порівнює об'єкти.
 * @param {Object} obj1 - Перший об'єкт
 * @param {Object} obj2 - Другий об'єкт
 * @returns {boolean}
 */
function deepEqual(obj1: Object, obj2: Object): boolean {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}
/**
 * Шукає чи є об'єкт в масиві.
 * @param {Object[]} array - Масив об'єктів.
 * @param {Object} obj - Шукаємий об'єкт.
 * @returns {boolean}
 */
export function deepEqualIsIn(array: Object[], obj: Object): boolean {
  let result = false;
  array.forEach((element) => {
    if (deepEqual(element, obj)) {
      result = true;
    }
  });
  return result;
}

export default deepEqual;