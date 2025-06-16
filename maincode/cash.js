console.log(name('Введите имя'));
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


let parceling = [];


do {
  let newinput = number("Введите сумму");
  parceling[steps] = +(newinput);
  steps++;
  console.log("Баланс:" + " " + parceling.reduce((acc, num) => acc + num));
} while (steps === parceling.length);















