const num1_el = document.getElementById("num1")
const num2_el = document.getElementById("num2")

let sumEl = document.getElementById("sum-el");

function add() {
  let num1 = parseInt(num1_el.value);
  let num2 = parseInt(num2_el.value);
  sumEl.innerText = "sum: " + (num1 + num2);

}

function subtract() {
  let num1 = parseInt(num1_el.value);
  let num2 = parseInt(num2_el.value);
  let result = num1 - num2;
  sumEl.innerText = "sum: " + result;
}

function multiply() {
  let num1 = parseInt(num1_el.value);
  let num2 = parseInt(num2_el.value);
  let result = num1 * num2;
  sumEl.innerText = "sum: " + result;
}

function divide() {
  let num1 = parseInt(num1_el.value);
  let num2 = parseInt(num2_el.value);
  let result = num1 / num2;
  sumEl.innerText = "sum: " + result;
}
