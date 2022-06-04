import Notiflix from 'notiflix';
// import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
// import { Block } from 'notiflix/build/notiflix-block-aio';
//
const fer = {
  inputDelay: document.querySelector('.form'),
  // inputDelay: document.querySelector('.form input[name="step"]'),
  buttonSubmit: document.querySelector('button'),
};

fer.inputDelay.addEventListener('submit', onSabmitButton);

function onSabmitButton(el) {
  el.preventDefault();

  let firsDelay = el.target.delay.value;
  let delay = el.target.step.value;
  let amount = el.target.amount.value;

  setTimeout(() => {
    const position = 0;
    createPromise(position, delay);
    //
    // console.log(delay, step, amount);
    //
  }, firsDelay);
  //
  //
  function createPromise(position, delay) {
    ///
    const int = setInterval(() => {
      const promise = new Promise((resolve, reject) => {
        const shouldResolve = Math.random() > 0.5;

        position += 1;
        if (position <= amount) {
          if (shouldResolve) {
            // Fulfill
            resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
            Notiflix.Notify.success('Sol lucet omnibus');
          } else {
            // Reject
            reject(`❌ Rejected promise ${position} in ${delay}ms`);
            Notiflix.Notify.failure('Qui timide rogat docet negare');
          }
        } else {
          clearInterval(int);
        }
      });
      //
      promise
        .then(value => {
          console.log(value);
        })
        .catch(error => {
          console.log(error);
        });
      //
    }, delay);
  }
}
