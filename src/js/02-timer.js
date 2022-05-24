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
// const MEMORY = 'fff';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    // sessionStorage.setItem('fff', selectedDates[0]);
    // const selectedDate = new Date(selectedDates[0]);
  },
};

// ref.button.disabled = true;
flatpickr(ref.input, options);
const selDate = flatpickr(ref.input, options);
console.log(selDate);

const date = new Date('March 16, 2030');
// const date1 = new Date().getTime();
// const dateN = Date.now('March 16, 2030');

console.log(date.toUTCString());
// console.log(date.getDay());
// console.log(dateN);
// check();

// function check() {
//   if () < date.toUTCString()) {
//     window.alert('Денис, обери нормальну дату');
//   } else {
//     console.log('data bilsha vse ok');
//   }
// }

// console.log('дефолтна дата в flatpickr (сьогодні)', options.defaultDate);
//
//
// ref.input.addEventListener('click', onInputAction);

// function onInputAction() {
//   console.log(sessionStorage.getItem(MEMORY));
//   const selectedDate = new Date(sessionStorage.getItem(MEMORY));
//   const defaultDateee = new Date(options.defaultDate);
//   // console.log(selectedDate);
//   console.log(selectedDate.toUTCString());
//   console.log(defaultDateee.toUTCString());
//   if (selectedDate.toUTCString() > defaultDateee.toUTCString()) {
//     console.log('data mensha');
//     //   window.alert('Денис, обери нормальну дату');
//   }
//   if (selectedDate.toUTCString() < defaultDateee.toUTCString()) {
//     console.log('data bilsha vse ok');
//     //   ref.button.disabled = false;
//     // sessionStorage.clear();
//   }
// }
//
//
//
// function checkTimmerDate() {
//   if
// }
//
//
//
//
//
//
// console.log(ref.dataDays.textContent);
// console.log(ref.dataHours.textContent);
// console.log(ref.dataMinutes.textContent);
// console.log(ref.dataSeconds.textContent);
