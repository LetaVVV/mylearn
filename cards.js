//функ-я для расчета вероятности выигрыша
function calculateWinProbability(yourCards, trumpSuit) {

  //все масти и значения карт
  const suit = ["diamonds", "hearts", "spades", "clubs"];
  const ranks = ["6", "7", "8", "9", "10", "J", "Q", "K", "T"];

  let desk = [];
  for (let suit of suits) {
    for (let rank of ranks) {
      desk.push({ suit, rank });
    }
  }
}

// удаление из колоды карт, которые уже на руках
yourCards.forEach(cards => {
  const index = desk.findIndex(c => c.suit === card.suit && c.rank === card.rank);
  if (index !== -1) desk.splice(index, 1);

});

function cardStrengh(card) {
  const strengh = {
    "6": 0
    "7": 1
    "8": 2
    "9": 3
    "10": 4
    "J": 5
    "Q": 6
    "K": 7
    "T": 8
  };

  // сила козыря
  const trump = card.suit === trumpSuit;
  return trump ? strengh[card.rank] + 20 : strengh[card.rank];
}


