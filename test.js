/**
 * @param {string} input
 * @returns {boolean}
 */
function isPalindrom(input) {
  if (input.length < 2)
    return true;

  if (input.at(0) !== input.at(-1))
    return false;

  return isPalindrom(input.slice(1, -1));
}

console.log(isPalindrom('rara'));


