import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const ref = {
  input: document.querySelector('#datetime-picker'),
  button: document.querySelector('button[data-start]'),
  dataDays: document.querySelector('span[data-days]'),
  dataHours: document.querySelector('span[data-hours]'),
  dataMinutes: document.querySelector('span[data-minutes]'),
  dataSeconds: document.querySelector('span[data-seconds]'),
};

const MEMORY = 'selectedDatesInStorage';
ref.button.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0]);
    if (options.defaultDate < selectedDates[0]) {
      ref.button.disabled = false;
      sessionStorage.setItem('selectedDatesInStorage', selectedDates[0]);
    }
    if (options.defaultDate > selectedDates[0]) {
      window.alert('Денис, обери нормальну дату');
    }
  },
};

flatpickr(ref.input, options);
ref.button.addEventListener('click', onStartButton);

function onStartButton() {
  const selectedDatesMiliSec = new Date(sessionStorage.getItem(MEMORY)).getTime();
  const timerId = setInterval(() => {
    const defaultDateNow = Date.now();
    const difference = selectedDatesMiliSec - defaultDateNow;

    if (difference >= 0) {
      // console.log(convertMs(difference));
      convertMs(difference);
    } else {
      window.alert('You are the best of the best 🏆');
      clearInterval(timerId);
    }
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  const daysString = days.toString();
  ref.dataDays.textContent = addLeadingZero(daysString);

  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  const hoursString = hours.toString();
  ref.dataHours.textContent = addLeadingZero(hoursString);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const minutesString = minutes.toString();
  ref.dataMinutes.textContent = addLeadingZero(minutesString);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  const secondsString = seconds.toString();
  ref.dataSeconds.textContent = addLeadingZero(secondsString);

  function addLeadingZero(val) {
    return val.padStart(2, '0');
  }

  return { days, hours, minutes, seconds };
}
