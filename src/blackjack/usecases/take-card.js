export const takeCard = (deck, updateDeckCounter, deckCounter) => {
  if (deck.length === 0) {
    throw new Error('No cards left in the deck.');
  }
  const card = deck.pop();
  updateDeckCounter(deck, deckCounter);
  return card;
};
