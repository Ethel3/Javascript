let firstCard = 11
let secondCard = 2
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
 let messageEl = document.getElementById("message-el")
 console.log(messageEl)
//  let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")




function Game() {
    cardsEl.textContent = "cards: " + firstCard + "" + "" + secondCard
    sumEl.textContent = "sum: " + sum
    if (sum < 21) {
        // console.log("Draw new cards" + "🙂")
        message = ("Draw new cards")
    }
    else if (sum === 21) {
        // console.log("congrats!!" + "🥳")
       message = ("Congrats!!")
        let hasBlackJack = true
        let isAlive = false
    }
    else if(sum > 21) {
        // console.log("You're out of the game!" + "😭")
        message = ("You're out of the game!")
    }
    // console.log(message)
    messageEl.textContent = message

}

function newCard(){
    console.log("Drawing a new card")
}

// let age = 150
// if (age < 100){
//     console.log("You're not eligible! ")
// }
// else if(age == "100"){
//     console.log("Here is your Birthday Card!!")
// }else {
//     console.log("You're not eligible! You already have a Card")
// }