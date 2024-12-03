const sendButton = document.querySelector('.send-btn');
const planeIcon = document.querySelector('.plane-icon');

sendButton.addEventListener('click', () => {
  // Перевіряємо, чи анімація відльоту вже не активна
  if (!planeIcon.classList.contains('plane-fly')) {
    planeIcon.classList.add('plane-fly');
    
    // Після завершення анімації відльоту, додаємо анімацію повернення
    setTimeout(() => {
      planeIcon.classList.remove('plane-fly');
      planeIcon.classList.add('plane-return');
      
      // Видаляємо клас повернення після його завершення
      setTimeout(() => {
        planeIcon.classList.remove('plane-return');
      }, 1000); // Тривалість анімації повернення
    }, 1000); // Тривалість анімації відльоту
  }
});
