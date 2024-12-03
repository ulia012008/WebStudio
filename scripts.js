
const sendButton = document.querySelector('.send-btn');
const planeIcon = document.querySelector('.plane-icon');
sendButton.addEventListener('click', () => {
planeIcon.classList.add('plane-fly');
setTimeout(() => {
planeIcon.classList.remove('plane-fly');
  }, 1000);
});
