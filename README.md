# About

This code consists of three tasks. It was written to practice different JS
functions.

### Task 1: Background Color Switching

The webpage displays two buttons to start and stop the background color
changing. When the start button is clicked, the background color of the webpage
changes randomly generated colors every 500 milliseconds. The start button is
then disabled, and the stop button is enabled. When the stop button is clicked,
the color-changing stops, and the buttons are reset to their initial states.

### Task 2: Countdown Timer

This code imports and configures a date picker library (Flatpickr) and a
notification library (Notiflix) and sets up event listeners for the date picker
and a start button. When the start button is clicked, it calculates the
remaining time until the selected date and updates the HTML elements with the
remaining days, hours, minutes, and seconds in a countdown. If the selected date
is in the past, it shows an error notification. This code also defines functions
to add leading zeros to numbers and convert milliseconds to days, hours,
minutes, and seconds.

### Task 3: Promises

This code handles a form submission and creates promises with randomized success
rates using the createPromise() function. The user inputs the initial delay,
delay step, and amount of promises to create. The promises are then executed
using .then() and .catch() to log a success or failure message to the console,
as well as show notifications to the user using the Notiflix library.

## Libraries

- Notiflix
- Flatpickr
