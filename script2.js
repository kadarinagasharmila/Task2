    let display = document.getElementById("display");
    let currentInput = "0";

    function updateDisplay() {
      display.textContent = currentInput;
    }

    function clearDisplay() {
      currentInput = "0";
      updateDisplay();
    }

    function appendNumber(num) {
      if (currentInput === "0") {
        currentInput = num.toString();
      } else {
        currentInput += num.toString();
      }
      updateDisplay();
    }

    function appendDot() {
      if (!currentInput.includes(".")) {
        currentInput += ".";
      }
      updateDisplay();
    }

    function appendOperator(operator) {
      let lastChar = currentInput[currentInput.length - 1];
      if ("+-*/".includes(lastChar)) {
        currentInput = currentInput.slice(0, -1) + operator;
      } else {
        currentInput += operator;
      }
      updateDisplay();
    }

    function calculateResult() {
      try {
        currentInput = eval(currentInput).toString();
      } catch {
        currentInput = "Error";
      }
      updateDisplay();
    }

    // Handle keyboard input
    document.addEventListener("keydown", (event) => {
      if (!isNaN(event.key)) {
        appendNumber(event.key);
      } else if ("+-*/".includes(event.key)) {
        appendOperator(event.key);
      } else if (event.key === "Enter") {
        calculateResult();
      } else if (event.key === "Backspace") {
        currentInput = currentInput.slice(0, -1) || "0";
        updateDisplay();
      } else if (event.key === "Escape") {
        clearDisplay();
      } else if (event.key === ".") {
        appendDot();
      }
    });