const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const onStart = () => {
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
};

const onStop = () => {
  timerId = setInterval(() => {}, 1000);
};
startBtn.addEventListener('click', onStart);
stopBtn.addEventListener('click', onStop);
