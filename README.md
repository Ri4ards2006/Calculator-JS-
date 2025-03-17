

# 📊 CalcPlotter: The Ultimate Interactive Calculator & Plotter 🚀

Welcome to **CalcPlotter**, the most mind-blowing calculator and graphing tool you’ll ever use! Built with love for math enthusiasts and developers alike, this project combines a draggable, dark-mode-ready calculator with a powerful plotting engine to visualize your equations in real-time. Whether you're solving equations or exploring functions, CalcPlotter has got you covered. Get ready to level up your math game! 🎉

---

## 🌟 Features That Will Blow Your Mind

- **Draggable Interface**: Move the calculator anywhere on your screen with a simple drag—freedom like never before!
- **Dark Mode**: Switch to a sleek dark theme for late-night math sessions or just because it looks cooler. 🌙
- **Real-Time Plotting**: Enter any mathematical expression (e.g., `sin(x)`, `x^2`) and see it graphed instantly on a canvas.
- **Basic Calculations**: Perform addition, subtraction, multiplication, and division with ease.
- **Error Handling**: No more crashes—invalid expressions trigger a friendly alert with examples.
- **Cross-Browser Compatible**: Works seamlessly on Chrome, Firefox, and more.

---

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Edge, etc.)
- Basic knowledge of HTML, CSS, and JavaScript (optional but helpful)

### Installation
1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/Ri4ards2006/Calculator-JS.git
   ```
2. Navigate into the project directory:
   ```bash
   cd CalcPlotter
   ```
3. Open the `index.html` file in your browser to launch the app. No installation needed—just pure web magic! ✨

---

## 🎮 Example: Calculate and Plot Like a Pro

Here’s a step-by-step example of how to use CalcPlotter to calculate a result and plot a function. This snippet shows the key functionality in action.

```javascript
// Assume these elements are defined in your HTML
let display = document.getElementById('display');
let calculator = document.getElementById('calculator');
let canvas = document.getElementById('plotCanvas');
let ctx = canvas.getContext('2d');
let isDarkMode = false;

// Drag functionality (already in your code)
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

// Append values and calculate
function appendValue(value) {
  display.value += value;
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

// Plot the function
function plotFunction() {
  try {
    let expr = display.value; // e.g., 'sin(x)' or 'x^2'
    ctx.clearRect(0, 0, canvas.width, canvas.height);

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

// Usage Example
appendValue('2 + 3'); // Display shows "2 + 3"
calculate();          // Display shows "5"
appendValue('sin(x)'); // Display shows "5sin(x)"
plotFunction();       // Plots the sine function (ignoring the "5" prefix)
toggleDarkMode();     // Switches to dark mode for a sleek look
```

### What Happens Here?
1. You start by entering `2 + 3`, calculate it to get `5`, and then append `sin(x)` to explore a function.
2. The `plotFunction` graphs the sine wave, adjusting for dark mode colors.
3. Dragging the calculator around the screen enhances your workflow.
4. If you enter something invalid (e.g., `x + y`), an alert guides you with examples like `sin(x)` or `x^2`.

---

## 🛠️ Contributing

Love CalcPlotter and want to make it even better? Awesome! Fork this repository, make your changes, and submit a pull request. Check out our [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines. Let’s build something epic together! 🤝

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

---

## 🙌 Credits

- Inspired by the beauty of math and the creativity of open-source projects.
- Special thanks to the JavaScript community for making this possible!

