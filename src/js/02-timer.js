import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const calendar = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const daysRemaining = document.querySelector('[data-days]');
const hoursRemaining = document.querySelector('[data-hours]');
const minutesRemaining = document.querySelector('[data-minutes]');
const secondsRemaining = document.querySelector('[data-seconds]');
startBtn.disabled = true;

//convertion function

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

let getSelectedDate;

// options for flatpickr
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date().getTime()) {
      startBtn.disabled = true;
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      startBtn.disabled = false;
      getSelectedDate = selectedDates[0].getTime();
    }
  },
};
flatpickr(calendar, options);

// countDown function
const countDown = () => {
  setInterval(function () {
    const remainingTime = getSelectedDate - new Date().getTime();
    const convertion = convertMs(remainingTime);

    daysRemaining.textContent = convertion.days;
    hoursRemaining.textContent = convertion.hours;
    minutesRemaining.textContent = convertion.minutes;
    secondsRemaining.textContent = convertion.seconds;
  }, 1000);
};

startBtn.addEventListener('click', countDown);
