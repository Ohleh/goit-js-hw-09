// Описаний в документації
import flatpickr from 'flatpickr';
// const flatpickr = require('flatpickr');
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

const ref = {
  input: document.querySelector('input[type="text"]'),
  button: document.querySelector('button[data-start]'),
};

console.log(ref.input);
console.log(ref.button);

flatpickr(ref.input, options);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};
