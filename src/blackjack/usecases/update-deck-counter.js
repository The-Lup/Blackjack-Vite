export const updateDeckCounter = (deck, deckCounter) => {
  const valueElement = deckCounter.querySelector('.counter-value');
  if (!valueElement) return;

  valueElement.textContent = deck.length;

  deckCounter.classList.remove('bg-low', 'bg-medium', 'bg-high');

  if (deck.length < 10) {
    deckCounter.classList.add('bg-low');
  } else if (deck.length < 20) {
    deckCounter.classList.add('bg-medium');
  } else {
    deckCounter.classList.add('bg-high');
  }
};
