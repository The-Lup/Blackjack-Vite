import { showMessage } from './show-message';

export const checkWinner = (playersPoints) => {
  const [playerPoints, computerPoints] = playersPoints;

  setTimeout(() => {
    if (playerPoints > 21) {
      showMessage('You busted! You lose 😞');
    } else if (computerPoints > 21) {
      showMessage('Computer busted! You win 🎉');
    } else if (playerPoints === computerPoints) {
      showMessage('Tie! 🤝');
    } else if (
      (playerPoints > computerPoints && playerPoints <= 21) ||
      computerPoints > 21
    ) {
      showMessage('You won!!! 🎉');
    } else {
      showMessage('You Lose!!! 😢');
    }
  }, 200);
};
