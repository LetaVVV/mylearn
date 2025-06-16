
/**
 * @param {string} message 
 * @returns {string}
 */
function name(message) {
  let input;

  while (!(input = prompt(message + ':')))
    console.error('Нужно ввести имя!');

  return input;
}

/**
 * @param {string} message 
 * @returns {number}
 */
function number(message) {
  let input;

  while (isNaN(input = +(prompt(message + ':') ?? '-')))
    console.error('Нужно ввести число!');

  if (input % 1 !== 0) {
    console.error('Ввести можно только целое число!');
    return number(message);
  }

  return Math.floor(input);
}


/**
 * @param {string} message 
 * @param {number} min 
 * @param {number} max 
 * @returns 
 */
function limitNumber(message, min, max) {
  do {
    let input = number(message);

    if (input >= min && input <= max)
      return input;

    console.error(`Число должно быть от ${min} до ${max}`);
  } while (true);
}

/**
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */
function rand(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}


/** @type {string[]} */
const players = [];
let count = limitNumber("Введите кол-во игроков", 1, 5);

while (count-- > 0) {
  players.push(name(`Имя ${players.length + 1} игрока`));
}


const min = number('число от');
const max = number('число до');

const randNumber = rand(min, max);
console.log('Начинаем играть.');
console.log(`Я загадал число от ${min} до ${max}.`);
console.log('Попробуйте его отгадать =)');

console.log('Начинает ' + players[0]);

let steps = 0;

console.log(randNumber);

do {
  const current = players[steps % players.length];
  const input = prompt(current + '>');

  if (!input)
    continue;

  if (input === 'stop')
    break;

  const num = +input;

  steps++;

  if (num === randNumber) {
    console.log('Выиграл ' + current);
    break;
  }

  const val = ['меньше', 'больше'][+(num > randNumber)];
  console.log(`Ваше число ${val} загаданного`);
} while (true);

console.log('Конец игры.');
console.log('Число было найдено за', steps, 'операций');