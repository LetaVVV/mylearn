
/**
 * 
 * @param {string} message 
 * @returns {string}
 */
function name(message) {
  let input;

  while (!(input = prompt(message + ":"))) {
    console.error("Нужно ввести имя");
  }
  return input;
}
/**
 * 
 * @param {string} message 
 * @returns {number}
 */
function number(message) {
  let input;

  while (isNaN(input = +(prompt(message + ":") ?? "-"))) {
    console.error("Нужно ввести число ");
  }
  return input;
}

let steps = 0;

let negativeNum = [];
let positiveNum = [];
while (true) {
  let input = number(message);
  if (Number(number(message)) > 0) {
    positiveNum.push(number(message));
    console.log(positiveNum.join(','));
    break;
  }
  if (Number(number(message)) < 0) {
    negativeNum.push(number(message));
    console.log(negativeNum.join(","));
    break;
  }
}



