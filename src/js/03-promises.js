import Notiflix from 'notiflix';
const form = document.querySelector('form');
const delayInput = form.querySelector('[name="delay"]');
const stepInput = form.querySelector('[name="step"]');
const amountInput = form.querySelector('[name="amount"]');
const submitBtn = form.querySelector('[type="submit"]');
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      console.log('ShouldResolve:', shouldResolve);
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

submitBtn.addEventListener('click', e => {
  e.preventDefault();
  let firstDelay = parseInt(delayInput.value);
  let step = parseInt(stepInput.value);
  let amount = parseInt(amountInput.value);

  for (let i = 1; i <= amount; i++) {
    createPromise(i, firstDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    firstDelay += step;
  }
});
