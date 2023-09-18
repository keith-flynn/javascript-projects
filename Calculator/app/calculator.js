'use sctrict';
let displayValue = '0';
let firstNumber = '';
let operator = '';
// writeOverDisplay helps emulate calculator display behavior
let writeOverDisplay = true;

// Take numerical input
function numberPress(button) {
  if (writeOverDisplay) {
    //if button press is first input
    displayValue = button.innerHTML;
    writeOverDisplay = false;
  } else {
    //else multiple presses for multi-digit numbers
    displayValue += button.innerHTML;
  }  
  // Update number on calculator display
  document.getElementById("numbersOnDisplay").innerHTML = displayValue;
}

// Take operator input
function operatorPress(button) {
  // Copy of display value saved
  firstNumber = displayValue.slice();
  operator = button.innerHTML;
  writeOverDisplay = true;
}

// Evaluate mathematical expression 
function equalsPress() {
  // evaluate the expression as if it were integers
  let evaluation = eval(firstNumber + operator + displayValue);
  // Change value back to string for display and re-use.
  displayValue = evaluation.toString();
  document.getElementById("numbersOnDisplay").innerHTML = displayValue;
  firstNumber = displayValue.slice();
  writeOverDisplay = true;
}

// Clear and reset display to zero
function clearPress(button) {
  // Reset all values from page load
  displayValue = '0';
  firstNumber = '';
  operator = '';
  writeOverDisplay = true;
  document.getElementById("numbersOnDisplay").innerHTML = displayValue;
}