'use sctrict';
let display = '0';

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
  // DEBUG
  alert(display)
}

// Add calculation to I'm not sure yet
// DEBUG let firstNumber = new String(display);
function operatorPress(button) {
  display += ` ${button.innerHTML}`;
  alert(display);
}