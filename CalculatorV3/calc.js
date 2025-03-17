let display = document.getElementById('display');
let isDarkMode = false;

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    // Evaluate the expression safely
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}

function toggleDarkMode() {
  isDarkMode = !isDarkMode;
  document.body.classList.toggle('dark-mode', isDarkMode);
}
