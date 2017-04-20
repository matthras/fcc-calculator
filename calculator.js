var displayArray = []; // Array of string?

function pushOne(input) {
  // When a button is pressed, push the corresponding value/operation into displayArray
  displayArray.push(input);
  displayUpdate();
}

var evaluate = function() {
  // Combine all elements in displayArray into a single expression and evaluate it

  // Update the display
  document.getElementById('display').innerHTML()
}

function displayUpdate() {
  document.getElementById('display').innerText = displayArray.join('');
}

function brackets(action) {
  displayArray.push(')')
  displayArray.unshift('(')
  switch(action) {
    case 'square':
      displayArray.unshift('Math.pow(');
      displayArray.push(',2)');
      break;
    case 'sqrt'):
      displayArray.unshift('sqrt');
      break;
  }
  equals();
}

function equals() {
  document.getElementById('display').innerText = eval(displayArray.join(''));
  displayArray = [];
}