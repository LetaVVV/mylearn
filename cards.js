
function calculateWin(trumpSuit, yourCards) {

  const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
  const ranks = ['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];


  let deck = [];
  for (let suit of suits) {
    for (let rank of ranks) {
      deck.push({ suit, rank });
    }
  }

  yourCards.forEach(card => {
    const index = deck.findIndex(c => c.suit === card.suit && c.rank === card.rank);
    if (index !== -1) {
      deck.splice(index, 1);
    }
  });


  function cardStrength(card) {
    const strength = {
      '6': 0,
      '7': 1,
      '8': 2,
      '9': 3,
      '10': 4,
      'J': 5,
      'Q': 6,
      'K': 7,
      'A': 8
    };

    const trump = card.suit === trumpSuit;
    return trump ? strength[card.rank] + 20 : strength[card.rank];
  }


  const sortedYourCards = [...yourCards].sort((a, b) => cardStrength(b) - cardStrength(a));



  let winScenar = 0;

  let totalScenar = 0;



  const maxSimul = 1000;

  for (let i = 0; i < maxSimul; i++) {

    const shuffled = [...deck].sort(() => Math.random() - 0.5);


    const oppCards = shuffled.slice(0, 6 - yourCards.length);


    const yourTrumps = yourCards.filter(c => c.suit === trumpSuit).length;

    const oppTrumps = oppCards.filter(c => c.suit === trumpSuit).length;


    const youAttack = yourTrumps > oppTrumps ||
      (yourTrumps === oppTrumps && Math.random() > 0.6);

    if (youAttack) {

      const attackingCard = sortedYourCards[0];

      const canDefend = oppCards.some(card => {

        return (card.suit === attackingCard.suit && cardStrength(card) > cardStrength(attackingCard)) ||
          (card.suit === trumpSuit && attackingCard.suit !== trumpSuit);
      });

      if (!canDefend) {
        winScenar++;
      }
    } else {

      const oppSortCards = [...oppCards].sort((a, b) => cardStrength(a) - cardStrength(b));
      const attCard = oppSortCards[0];


      const canDefend = sortedYourCards.some(card => {
        return (card.suit === attCard.suit && cardStrength(card) > cardStrength(attCard)) ||
          (card.suit === trumpSuit && attCard.suit !== trumpSuit);
      });

      if (canDefend) {
        winScenar++;
      }
    }

    totalScenar++;
  }


  return (winScenar / totalScenar) * 100;
}



// чисто на пробу
const trumpSuit = 'clubs';
const yourCards = [
  { suit: 'diamonds', rank: '6' },
  { suit: 'clubs', rank: 'Q' },
  { suit: 'spades', rank: '9' },
  { suit: 'hearts', rank: '7' },
  { suit: 'spades', rank: 'K' }
];

const winProbability = calculateWin(trumpSuit, yourCards);
console.log(`Вероятность выигрыша: ${winProbability.toFixed(2)}%`);