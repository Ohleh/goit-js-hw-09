const ref = {
  body: document.querySelector('body'),
  start: document.querySelector('button[data-start]'),
  stop: document.querySelector('button[data-stop]'),
};
let timerId = null;

ref.start.addEventListener('click', onStartClick);
ref.stop.addEventListener('click', onStopClick);

function onStartClick(action) {
  timerId = setInterval(() => {
    ref.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  ref.start.disabled = true;
}

function onStopClick() {
  clearInterval(timerId);
  ref.start.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
