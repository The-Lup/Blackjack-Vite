export const cardValue = (card) => {
  const value = card.substring(0, card.length - 1);
  return isNaN(value) ? (value === 'A' ? 11 : 10) : parseInt(value);
};
