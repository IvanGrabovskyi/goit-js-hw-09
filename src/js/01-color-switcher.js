const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

let colorChangeInterval;

function changeBgColor() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
}

function startColorChange() {
  stopColorChange();
  changeBgColor();
  colorChangeInterval = setInterval(changeBgColor, 1000);
  startBtn.disabled = true;
}

function stopColorChange() {
  clearInterval(colorChangeInterval);
  startBtn.disabled = false;
}

startBtn.addEventListener('click', startColorChange);
stopBtn.addEventListener('click', stopColorChange);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function o() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
}
