'use sctrict';
let display = '0';
let firstNumber;
let operator = '';

// Take numerical input
function numberPress(button) {
  if (display === '0') {
    //if button press is first input
    display = button.innerHTML;
  } else {
    //else pressing multiple buttons for larger numbers
    display += button.innerHTML;
  }
  
  // Update number on calculator display
  document.getElementById("numbersOnDisplay").innerHTML = display;
}

// Take operator input
function operatorPress(button) {
  firstNumber = display.slice();
  operator = button.innerHTML;
  display = '0';
}

// Evaluate mathematical expression 
function equalsPress(button) {
  let expression = (firstNumber + operator + display);

  // Try/catch for JavaScript errors
  try {
    document.getElementById("numbersOnDisplay").innerHTML = eval(expression);
  } catch (error) {
    document.getElementById("numbersOnDisplay").innerHTML = "Err.";
  }
}

// Clear and reset display to zero
function clearPress(button) {
  display = '0';
  operator = '';
  document.getElementById("numbersOnDisplay").innerHTML = display;
}