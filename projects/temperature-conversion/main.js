var fToC = document.getElementById('fToC');
var cToF = document.getElementById('cToF');
var result = document.getElementById('conversion');

function showCelsiusConversion(){
  // This outputs the F to C conversion on the page
  var f = parseFloat(document.getElementById('fahrenheit').value);
  var celsiusAnswer = convertToCelsius(f);
  result.textContent = f + "°F is " + celsiusAnswer + "°C";
}

fToC.addEventListener('click', showCelsiusConversion)

function showFahrenheitConversion(){
  // This outputs the C to F conversion on the page
  var c = parseFloat(document.getElementById('celsius').value);
  var fahrenheitAnswer = convertToFahrenheit(c);
  result.textContent = c + "°C is " + fahrenheitAnswer + "°F";
}

cToF.addEventListener('click', showFahrenheitConversion)

// Actual conversion functions
function convertToCelsius(fahrenheit) {
  return (fahrenheit - 32) / 1.8;
}

function convertToFahrenheit(celsius) {
  return celsius * 1.8 + 32;
}
