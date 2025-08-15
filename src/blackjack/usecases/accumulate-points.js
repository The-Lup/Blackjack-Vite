import { cardValue } from './card-value';

export const accumulatePoints = (card, turn, playersPoints, scrAccum) => {
  playersPoints[turn] += cardValue(card);
  scrAccum[turn].innerText = playersPoints[turn];
  return playersPoints[turn];
};
