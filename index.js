const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');
let inputCoff = 0;
let interval;

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {};
};

const animateTimer = createTimerAnimator();

function startTimer() {
  timerEl.textContent = --inputCoff
  if (inputCoff <= 0)
    interval = clearInterval(interval)
}

function onClick() {
  interval = clearInterval(interval)
  inputCoff = +inputEl.value

  if (inputCoff) {
    timerEl.textContent = inputCoff
    interval = setInterval(startTimer, 1000)
  }
}

buttonEl.addEventListener('click', onClick)