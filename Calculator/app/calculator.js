'use sctrict';
let display = '0';
document.getElementById("numbersOnDisplay").innerHTML = display;

/* take input
calculate
display
 */

// Take numerical input
function numberPress(button) {
  if (display === '0') {
    //if button press is first input
    display = button.innerHTML;
  } else {
    //else pressing multiple buttons for larger numbers
    display += button.innerHTML;
  }
  // Update number on calculator
  document.getElementById("numbersOnDisplay").innerHTML = display;
}

// Add calculation to I'm not sure yet
// DEBUG let firstNumber = new String(display);
function operatorPress(button) {
  if (display === '0') {    
    return // No action taken if there isn't a number to math
  } else {
    display += ` ${button.innerHTML}`;
    alert(display);
  }
}