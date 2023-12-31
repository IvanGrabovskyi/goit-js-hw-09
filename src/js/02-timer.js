import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}

const dateTimePicker = document.getElementById('datetime-picker');

flatpickr(dateTimePicker, {
  enableTime: true,
  time_24hr: true,
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];

    if (selectedDate && selectedDate > new Date()) {
      startBtn.disabled = false;
    } else {
      startBtn.disabled = true;
      alert('Please choose a date in the future');
    }
  },
});

const startBtn = document.querySelector('[data-start]');
const timerDays = document.querySelector('[data-days]');
const timerHours = document.querySelector('[data-hours]');
const timerMinutes = document.querySelector('[data-minutes]');
const timerSeconds = document.querySelector('[data-seconds]');
function addZero(value) {
  return String(value).padStart(2, '0');
}
let countDownInterval;

function startClock() {
  const selectedDate = new Date(dateTimePicker.value);
  const now = new Date();

  if (selectedDate <= now) {
    alert('Please choose a date in the future');
    return;
  }

  startBtn.disabled = true;

  function updateTimer() {
    const remainingTime = selectedDate - new Date();

    if (remainingTime <= 0) {
      clearInterval(countDownInterval);
      timerDays.textContent = '00';
      timerHours.textContent = '00';
      timerMinutes.textContent = '00';
      timerSeconds.textContent = '00';
      startBtn.disabled = false;
      return;
    }

    const { days, hours, minutes, seconds } = convertMs(remainingTime);

    timerDays.textContent = addZero(days);
    timerHours.textContent = addZero(hours);
    timerMinutes.textContent = addZero(minutes);
    timerSeconds.textContent = addZero(seconds);
  }

  updateTimer();
  countDownInterval = setInterval(updateTimer, 1000);
}

startBtn.addEventListener('click', startClock);
