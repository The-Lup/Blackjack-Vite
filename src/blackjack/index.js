import _ from 'underscore';
import { updateDeckCounter } from './usecases/update-deck-counter';
import { takeCard } from './usecases/take-card';
import { accumulatePoints } from './usecases/accumulate-points';
import { createCard } from './usecases/create-card';
import { computerTurn } from './usecases/computer-turn';
import { initializeGame } from './usecases/initialize-game';

let deck = [];
const cardTypes = ['C', 'D', 'H', 'S'],
  specialCards = ['A', 'J', 'Q', 'K'];

let playersPoints = [];
let playersCards = [[], []];

// HTML references
const btnHit = document.querySelector('#btnHit'),
  btnStand = document.querySelector('#btnStand'),
  btnNew = document.querySelector('#btnNew');

const divPlayersCards = [
  document.querySelector('#ply-cards'),
  document.querySelector('#comp-cards'),
];

const scrAccum = document.querySelectorAll('h2 small');

// Deck counter element
const deckCounter = document.createElement('div');
deckCounter.id = 'deck-counter';
deckCounter.innerHTML = `
    <div class="counter-container">
      <span class="counter-label">Cards left</span>
      <span class="counter-value">0</span>
    </div>
  `;
document.body.appendChild(deckCounter);

// Eventos
btnHit.addEventListener('click', () => {
  const card = takeCard(deck, updateDeckCounter, deckCounter);
  playersCards[0].push(card);
  createCard(card, 0, divPlayersCards);
  const playerPoints = accumulatePoints(card, 0, playersPoints, scrAccum);

  if (playerPoints > 21 || playerPoints === 21) {
    btnHit.disabled = true;
    btnStand.disabled = true;
    computerTurn(
      playerPoints,
      deck,
      playersCards,
      divPlayersCards,
      playersPoints,
      scrAccum,
      updateDeckCounter,
      deckCounter
    );
  }
});

btnStand.addEventListener('click', () => {
  btnHit.disabled = true;
  btnStand.disabled = true;
  computerTurn(
    playersPoints[0],
    deck,
    playersCards,
    divPlayersCards,
    playersPoints,
    scrAccum,
    updateDeckCounter,
    deckCounter
  );
});

btnNew.addEventListener('click', () =>
  initializeGame(
    2,
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
  )
);

// Start game
initializeGame(
  2,
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
);
