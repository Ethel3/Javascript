let firstCard = 11
let secondCard = 9
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true

let message = ""

if (sum < 21) {
    // console.log("Draw new cards" + "🙂")
    message = ("Draw new cards" + "🙂")
}
else if (sum === 21) {
    // console.log("congrats!!" + "🥳")
   message = ("Comgrats!!" + "🥳")
    let hasBlackJack = true
    let isAlive = false
}
else if(sum > 21) {
    // console.log("You're out of the game!" + "😭")
    message = ("You're out of the game!" + "😭")
}
console.log(message)

// let age = 150
// if (age < 100){
//     console.log("You're not eligible! ")
// }
// else if(age == "100"){
//     console.log("Here is your Birthday Card!!")
// }else {
//     console.log("You're not eligible! You already have a Card")
// }