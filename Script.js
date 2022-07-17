// let count = 5
// count = count + 1
// console.log(count)
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el");
let count = 0

console.log(saveEl)

function increment (){
    count = count + 1
    countEl.innerText = count
}

function save(){
    let countStr = count + " - "
    saveEl.innerText +=countStr
    console.log(count)
}