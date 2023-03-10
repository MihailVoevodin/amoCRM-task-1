const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');
let timerAnimator;

// Функция добавления нуля к значению меньше 10 для соблюдения формата
function addZero(num) {
  if (num < 10 && num >= 0) {
    return `0${num}`;
  } else {
    return num;
  }
}
// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
      timerAnimator = setInterval(() => {
      const secondsLeft = seconds % 60;
      const minutesLeft = seconds / 60 % 60;
      const hoursLeft = seconds / 60 /60 % 60;
      if (seconds < 0) {
        clearInterval(timerAnimator);
        alert('Время вышло! Alarm!');
      } else {
        timerEl.innerHTML = `${addZero(Math.trunc(hoursLeft))}:${addZero(Math.trunc(minutesLeft))}:${addZero(secondsLeft)}`;
      }
      seconds--;
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', (e) => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  e.target.value = e.target.value.replace(/\D/g, '');
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);
  clearInterval(timerAnimator);
  animateTimer(seconds);

  inputEl.value = '';
});
