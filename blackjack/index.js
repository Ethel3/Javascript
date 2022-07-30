let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = true
let message = ""
 let messageEl = document.getElementById("message-el")
//  console.log(messageEl)
//  let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
     name : "Ethel",
     chips : 170
}


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

console.log(cards)
function getRandomCard(){
    let  randomNumber = Math.floor ( Math.random()*13) + 1
    if (randomNumber > 10){
        return 10
    } else if (randomNumber === 1){
        return 11
    }else {
        return randomNumber
    }
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}


function renderGame() {
    cardsEl.textContent = "cards: " 
    // + cards[0] + " " + " " + cards[1]
    //for loop
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent +=cards[i] + " "
    }
    
    sumEl.textContent = "sum: " + sum
    if (sum <= 20) {
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
    // console.log("Drawing a new card")
    if (isAlive === true && hasBlackJack === false){
    let card = getRandomCard()
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
    }
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