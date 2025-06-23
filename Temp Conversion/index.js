const textBox = document.getElementById('textBox');
const toFahrenheit = document.getElementById('toFahrenheit');
const toCelsius = document.getElementById('toCelsius');
const result = document.getElementById('result');

let temp;

function convert() {
  if (toFahrenheit.checked) {
    temp = Number(textBox.value);
    temp = temp * 1.8 + 32;
    result.textContent = temp.toFixed() + '°F';
  } else if (toCelsius.checked) {
    temp = Number(textBox.value);
    temp = (temp - 32) * (5 / 9);
    result.textContent = temp.toFixed() + '°C';
  } else {
    result.textContent = 'Select a Unit';
  }
}
