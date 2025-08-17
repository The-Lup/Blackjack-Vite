export const createCard = (card, turn, divPlayersCards) => {
  const imgCard = document.createElement('img');
  imgCard.src = `./assets/cartas/${card}.png`;
  imgCard.classList.add('cards');
  divPlayersCards[turn].appendChild(imgCard);
};
