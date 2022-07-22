let firstCard = 11
let secondCard = 16
let sum = firstCard + secondCard
let hasBlackJack = false

let isAlive = true

if (sum < 21) {
    console.log("Draw new cards" + "🙂")
}
else if (sum === 21) {
    console.log("Comgrats!!" + "🥳")
    let hasBlackJack = true
    let isAlive = false
}
else if(sum > 21) {
    console.log("You're out of the game!" + "😭")
}
console.log(isAlive)

// let age = 150
// if (age < 100){
//     console.log("You're not eligible! ")
// }
// else if(age == "100"){
//     console.log("Here is your Birthday Card!!")
// }else {
//     console.log("You're not eligible! You already have a Card")
// }