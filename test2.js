
// 9. Печать всех элементов массива с конца
// Рекурсивно выведите все элементы массива в обратном порядке.
// Например, [1, 2, 3, 4] → "4 3 2 1".

/**
 * 
 * @param {Array} massiv 
 * @returns {Array}
 */

function rescursive(massiv) {
  if (massiv.length === 0) {
    return [0];
  }
  return rescursive(massiv.pop()) + massiv[massiv.length];
}
console.log(rescursive([1, 2, 3]));