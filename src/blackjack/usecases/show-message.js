const messageContainer = document.createElement('div');
messageContainer.id = 'game-message';
document.body.appendChild(messageContainer);

export const showMessage = (text, duration = 3000) => {
  messageContainer.textContent = text;
  messageContainer.style.opacity = '1';
  messageContainer.style.pointerEvents = 'auto';

  setTimeout(() => {
    messageContainer.style.opacity = '0';
    messageContainer.style.pointerEvents = 'none';
  }, duration);
};
