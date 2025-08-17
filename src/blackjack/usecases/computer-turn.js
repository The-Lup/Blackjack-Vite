import { takeCard } from './take-card';
import { createCard } from './create-card';
import { accumulatePoints } from './accumulate-points';
import { checkWinner } from './check-winner';

export const computerTurn = (
  playerPoints,
  deck,
  playersCards,
  divPlayersCards,
  playersPoints,
  scrAccum,
  updateDeckCounter,
  deckCounter
) => {
  let computerPoints = 0;
  do {
    const card = takeCard(deck, updateDeckCounter, deckCounter);
    playersCards[1].push(card);
    createCard(card, 1, divPlayersCards);
    computerPoints = accumulatePoints(card, 1, playersPoints, scrAccum);
  } while (computerPoints < playerPoints && playerPoints <= 21);

  checkWinner(playersPoints);
};
