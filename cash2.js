/**
 * 
 * @param {string} message 
 * @returns {number}
 */
function number(message) {
  let input;


  while (isNaN(input = +(prompt(message + ":") ?? "-")))
    console.error("Нужно ввести число ");

  return input;
}

let steps = 0;
let positive = 0;
let negative = 0;


/** @type {{ammount: number, date: number}[]} */
const transactions = [];


do {
  // Вывод
  console.log('Всего транзакций:', steps);
  console.log("Баланс:", positive - negative);
  console.log("Доходы:", positive);
  console.log("Расходы:", negative);

  const input = prompt('>');

  if (input === 'stop') {
    break;
  }

  if (input === 'history') {
    console.log('История:');
    transactions.forEach(({ ammount, date }) => {
      console.log('  ', ammount, new Date(date));
    });
    continue;
  }

  const ammount = +input;

  if (isNaN(ammount)) {
    console.error('Нераспознанная команда');
    continue;
  }

  steps++;
  positive += Math.max(0, ammount);
  negative -= Math.min(0, ammount);
  transactions.push({ ammount, date: Date.now() });
} while (true);















