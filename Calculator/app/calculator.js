'use sctrict';
let displayValue = '0';
let firstNumber = '';
let operator = '';
let writeOverDisplay = true;

// Take numerical input
function numberPress(button) {
  if (writeOverDisplay) {
    //if button press is first input
    displayValue = button.innerHTML;
    writeOverDisplay = false;
  } else {
    //else pressing multiple buttons for larger numbers
    displayValue += button.innerHTML;
  }  
  // Update number on calculator display
  document.getElementById("numbersOnDisplay").innerHTML = displayValue;
}

// Take operator input
function operatorPress(button) {
  firstNumber = displayValue.slice();
  operator = button.innerHTML;
  writeOverDisplay = true;
}

// Evaluate mathematical expression 
function equalsPress() {
  let evaluation = eval(firstNumber + operator + displayValue);
  displayValue = evaluation.toString();
  document.getElementById("numbersOnDisplay").innerHTML = displayValue;
  firstNumber = displayValue.slice();
  writeOverDisplay = true;
}

// Clear and reset display to zero
function clearPress(button) {
  displayValue = '0';
  firstNumber = '';
  operator = '';
  writeOverDisplay = true;
  document.getElementById("numbersOnDisplay").innerHTML = displayValue;
}