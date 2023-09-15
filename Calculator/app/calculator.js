'use sctrict';
let display = '0';

/* take input
calculate
display
 */
function numberPress(button) {
  if (display === '0') {
    display = button.innerHTML;
  } else {
    display += button.innerHTML;
  }
  alert(`button text: ${display}`)
}