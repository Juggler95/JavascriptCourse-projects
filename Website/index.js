// A callback is a function that is passed as an argument to another function and is executed after some operation has been completed.

sum(displayPage, 1, 2);

function sum(callback, x, y) {
  let result = x + y;
  callback(result);
}

function displayConsole(result) {
  console.log(result);
}

function displayPage(result) {
  document.getElementById('myH1').textContnent = result;
}
