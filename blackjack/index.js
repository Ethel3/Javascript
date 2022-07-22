let firstCard = 11
let secondCard = 12
let sum = firstCard + secondCard

if (sum < 21) {
    console.log("Draw new cards" + "🙂")
}
else if (sum === 21) {
    console.log("Comgrats!!" + "🥳")
}
else if (sum > 21) {
    console.log("You're out of the game" + "😭")
}