let display = document.getElementById('display');
let calculator = document.getElementById('calculator');
let canvas = document.getElementById('plotCanvas');
let ctx = canvas.getContext('2d');
let isDarkMode = false;

// Allow dragging of the calculator
let isDragging = false;
let offsetX, offsetY;

calculator.addEventListener('mousedown', (e) => {
  isDragging = true;
  offsetX = e.clientX - calculator.offsetLeft;
  offsetY = e.clientY - calculator.offsetTop;
  calculator.classList.add('dragging');
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    calculator.style.left = e.clientX - offsetX + 'px';
    calculator.style.top = e.clientY - offsetY + 'px';
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  calculator.classList.remove('dragging');
});

// Basic calculator functionality
function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}

// Toggle dark mode
function toggleDarkMode() {
  isDarkMode = !isDarkMode;
  document.body.classList.toggle('dark-mode', isDarkMode);
}

// Plot a function
function plotFunction() {
  try {
    let expr = display.value; // Get the user input
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous plot

    // Plot settings
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);
    ctx.strokeStyle = isDarkMode ? '#fff' : '#000';
    ctx.lineWidth = 1;

    for (let x = -canvas.width / 2; x < canvas.width / 2; x++) {
      let y = eval(expr.replace(/x/g, `(${x / 20})`));
      ctx.lineTo(canvas.width / 2 + x, canvas.height / 2 - y * 20);
    }
    ctx.stroke();
  } catch (error) {
    alert('Ungültiger Ausdruck! Versuche z. B. sin(x), x^2, etc.');
  }
}
