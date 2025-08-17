import _ from 'underscore';

// Create and shuffle a new deck
const createDeck = (cardTypes, specialCards) => {
  const newDeck = [];
  for (let i = 2; i <= 10; i++) {
    for (let type of cardTypes) {
      newDeck.push(i + type);
    }
  }
  for (let type of cardTypes) {
    for (let special of specialCards) {
      newDeck.push(special + type);
    }
  }
  return _.shuffle(newDeck);
};

export default createDeck;
