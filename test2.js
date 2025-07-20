/**
 * 
 * @param {number[]} array 
 * @returns {number[]}
 */

function sort(array) {
  if (array.length < 2)
    return array;

  for (let i = 1; i < array.length; i++) {
    if (array[i - 1] > array[i]) {
      const acc = array[i - 1];
      array[i - 1] = array[i];
      array[i] = acc;
      return sort(array);
    }
  }

  return array;
}
console.log(sort([3, 1, 4, 2]));