'use sctrict';
let display = '0';
let firstNumber;
let operator = '';
let firstValue = false;

// Take numerical input
function numberPress(button) {
  if (operator === '') {
    if (display === '0') {
      //if button press is first input
      display = button.innerHTML;
    } else {
      //else pressing multiple buttons for larger numbers
      display += button.innerHTML;
    }
  } else if (operator && firstValue === false) {
    display = button.innerHTML;
    firstValue = true;
  } else /* (operator && firstValue) */ {
    display += button.innerHTML;
  }
  
  // Update number on calculator display
  document.getElementById("numbersOnDisplay").innerHTML = display;
}

function operatorPress(button) {
  firstNumber = display.slice();
  operator = button.innerHTML;
  // if firstNumber === undefined,
  //display = firstNumber operator secondNumber 
  //document.getElementById("numbersOnDisplay").innerHTML = display;
}



// Clear and reset display to zero
function clearPress(button) {
  display = '0';
  operator = '';
  firstValue = false;
  document.getElementById("numbersOnDisplay").innerHTML = display;
}