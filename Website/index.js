// forEach() = method that executes a provided function once for each array element
// Syntax: array.forEach(callback(currentValue[, index[, array]])[, thisArg])

let fruits = ['apple', 'banana', 'orange', 'coconut'];

fruits.forEach(capitalize);
fruits.forEach(display);

function display(element) {
  console.log(element);
}

function upperCase(element, index, array) {
  array[index] = element.toUpperCase();
}

function lowerCase(element, index, array) {
  array[index] = element.toLowerCase();
}
function capitalize(element, index, array) {
  array[index] =
    element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
}
