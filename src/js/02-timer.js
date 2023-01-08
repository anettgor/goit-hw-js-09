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
  //remaining time
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
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
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      startBtn.disabled = false;
      getSelectedDate = selectedDates[0].getTime();
    }
  },
};
flatpickr(calendar, options);

//leading 0
const leadingZero = e => {
  return String(e).padStart(2, '0');
};
// countDown function
const countDown = () => {
  setInterval(function () {
    const remainingTime = getSelectedDate - new Date().getTime();
    const convertion = convertMs(remainingTime);

    if (remainingTime <= 0) {
      clearInterval(countDown);
      startBtn.disabled = false;
    } else {
      startBtn.disabled = true;
      daysRemaining.textContent = leadingZero(convertion.days);
      hoursRemaining.textContent = leadingZero(convertion.hours);
      minutesRemaining.textContent = leadingZero(convertion.minutes);
      secondsRemaining.textContent = leadingZero(convertion.seconds);
    }
  }, 1000);
};

startBtn.addEventListener('click', countDown);
