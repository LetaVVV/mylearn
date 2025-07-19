//Выживание: если у живой клетки 2 или 3 соседа, она остаётся живой (1)

//Смерть от перенаселения: если соседей > 3, клетка умирает(0)

//Смерть от одиночества: если соседей < 2, клетка умирает(0)




const cellSize = 15;

const gameContainer = document.getElementById('game-container');

if (!(gameContainer instanceof HTMLDivElement))
  throw new Error('Can not find container');
const config = { rows: 10, cols: 10 };
gameContainer.style.setProperty('--rows', config.rows + '');
gameContainer.style.setProperty('--cols', config.cols + '');


/**
 * 
 * @param {object} config 
 * @param {number} rows 
 * @param {object} config 
 * @param {number} cols 
 */

function createGrid(config.rows, config.cols) {
  const grid = Array(config.rows).fill().map(() => Array(config.cols).fill(0));


  for (let row = 0; row < config.rows; row++) {

  }
}





