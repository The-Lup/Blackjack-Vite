import createDeck from './create-deck';
import { updateDeckCounter } from './update-deck-counter';

export const initializeGame = (
  numPlayers,
  playersPoints,
  playersCards,
  scrAccum,
  divPlayersCards,
  cardTypes,
  specialCards,
  btnHit,
  btnStand,
  deck,
  deckCounter
) => {
  playersPoints.length = 0;
  playersCards.length = 0;
  scrAccum.forEach((elem) => (elem.innerText = '0'));
  divPlayersCards.forEach((div) => (div.innerHTML = ''));

  for (let i = 0; i < numPlayers; i++) {
    playersPoints.push(0);
    playersCards.push([]);
  }

  deck.splice(0, deck.length, ...createDeck(cardTypes, specialCards));

  btnHit.disabled = false;
  btnStand.disabled = false;

  updateDeckCounter(deck, deckCounter);
  console.clear();
  console.log('New deck created:', deck.length, 'cards');
};
