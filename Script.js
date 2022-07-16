// let count = 5
// count = count + 1
// console.log(count)
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
  count = count + 1;
  countEl.innerText = count;
}

function save() {
  console.log(count);
}
