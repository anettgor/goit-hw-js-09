const form = document.querySelector('form');
const firstDelay = form.querySelector('input[name="delay"]');
const delayStep = form.querySelector('input[name="step"]');
const delayAmount = form.querySelector('input[name="amount"]');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
