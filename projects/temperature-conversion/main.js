var fToC = document.getElementById('fToC');
var cToF = document.getElementById('cToF');
var result = document.getElementById('conversion');

fToC.onclick = function(){
  var f = parseFloat(document.getElementById('fahrenheit').value);
  var celsiusAnswer = convertToCelsius(f);
  result.textContent = f + "°F is " + celsiusAnswer + "°C";
}

cToF.onclick = function(){
  var c = parseFloat(document.getElementById('celsius').value);
  var fahrenheitAnswer = convertToFahrenheit(c);
  result.textContent = c + "°C is " + fahrenheitAnswer + "°F";
}

function convertToCelsius(fahrenheit) {
  return (fahrenheit - 32) / 1.8;
}

function convertToFahrenheit(celsius) {
  return celsius * 1.8 + 32;
}

/*
Steps
1. Set up variables; buttons in global scope and values in their own function scope
1b. Put values in onclick handler b/c of this: https://stackoverflow.com/questions/21477717/how-to-call-a-js-function-using-onclick-event
1c. Getting value out of input field: use document.getElementById('inputFieldId').value;
2. Set up functions: introduce operations and returns
3. Set up on click event handlers
4. Set up anonymous functions with click events to return console.log of answer
5. Figure out "why the values aren't evaluating correctly (NaN)": input turns things into strings by default
Use parseInt converter to convert input value when putting into function
6. How to show results on DOM? textcontent
*/
