var displayArray = [' ']; // Array of string?
var lastButtonPushedIsEquals = false;

// Functionality To Add:
// - After a result is computed, pressing a plus/minus/times/divide, etc. should add onto the existing calculation
// - If the equals sign has been pressed, then take the current result and put it into the calculation display

// If the last button was pushed, then this function clears the display.- not needed?
const checkEquals = () => { 
  if (lastButtonPushedIsEquals){
    displayArray = [];
    displayUpdate();
  }
}

const pushOne = (input) => {
  checkEquals();
  // When a button is pressed, push the corresponding value/operation into displayArray
  displayArray.push(input);
  displayUpdate();
}

const backspace = () => {
  displayArray.pop();
  displayUpdate();
}

const clearDisplay = () => {
  displayArray = [];
  displayUpdate();
}

const displayUpdate = () => {
  if(displayArray.length === 0) {
    document.getElementById('calculationDisplay').innerHTML = '&nbsp;'
  } else {
  document.getElementById('calculationDisplay').innerHTML = displayArray.join('');
  }
}

const brackets = (action) => {
  displayArray.push(')')
  displayArray.unshift('(')
  switch(action) {
    case 'square':
      displayArray.unshift('Math.pow(');
      displayArray.push(',2)');
      break;
    case 'sqrt':
      displayArray.unshift('Math.sqrt');
      break;
    case 'inverse':
      displayArray.unshift('1/(')
      displayArray.push(')')
      break;
  }
  equals();
}

const equals = () => {
  document.getElementById('resultDisplay').innerText = eval(displayArray.join(''));
  lastButtonPushedIsEquals = true;
}