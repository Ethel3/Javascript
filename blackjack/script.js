// let techCareers = [
//     "Software Engineer",
//     "Frontend Developer",
//     "UI/UX designer",
//     "Backend Developer",
//     "Cyber security personnel",
// ]
// // console.log(techCareers)
// console.log(techCareers[4])


// console.log(techCareers.length)

// for( let count =0; count < 5; count+=1){
//     console.log(count)
// }
// for (let i = 0; i <= 100; i +=10){
//     console.log(i)
// }
 

// {for loops and arrays}
// let messages = [
//     "Hey, how are you doing?",
//     "I'm great, thank you! How about you?",
//     "All is well. Been working on some projects.",
//     "Same here!",
//     "That's great to hear."
// ]
// for(i = 0; i < messages.length; i+=1){
//     console.log(messages[i])
// }

// let sentence = ["Hello","my","name", "is","Ethel"]
// let greetingEl = document.getElementById("greeting-el")

// for (let i =0; i<sentence.length; i++){
//     greetingEl.textContent += sentence[i] +" "
// }

let player1Time = 102
let player2Time = 109

function getFastestRaceTime(){
    if (player1Time < player2Time){
        return player1Time
    }else if(player2Time < player1Time){
        return player2Time
    }else{
        return player1Time
    }
}
// let fastestRace = getFastestRaceTime()
// console.log(fastestRace)

// function getTotalRaceTime(){
//     return player1Time + player2Time
// }
// let totalTime = getTotalRaceTime()
// console.log(totalTime)

//GENERATING RANDOM NUMBERS 
// let randomNumber = Math.floor(Math.random() * 6) + 1

// // console.log(randomNumber)

// function rollDice(){
//     let randomNumber = Math.floor(Math.random() * 6) + 1
//     return randomNumber
// }

// console.log(rollDice())

// AND LOGICAL OPERATORS
// let hasSolvedChallenge = false
// let hasHintsLeft = false

// if (hasSolvedChallenge === false && hasHintsLeft === false){
//     showSolution()
// }


// function showSolution(){
//     console.log("Showing the solution....")
// }

//OR LOGICAL OPERATORS
// let likesDocumentaries = true
// let likesStartups = false

// if (likesDocumentaries === true || likesStartups === false)
// recommendMovie()
// function recommendMovie(){
//     console.log("Hey, check out this new film")
// }

//INTRODUCTION TO OBJECTS
// let course = {
//     title: "Learn Photography",
//     lessons: 14,
//     creator: "Ethel",
//     length: 90,
//     level: 2,
//     isFree: true,
//     tags: ["photshoot", "ordinary"]
// }

// console.log(course.tags )

// let castle = {
//     title: "Live like a king in my castle",
//     price: 170,
//     isSuperHost: true,
//     images: ["img/castle1.png", "img/castle2.png"]
// }

// console.log(castle.price)
// console.log(castle.isSuperHost)

// OBJECTS AND FUNCTIONS 
let person = {
    name: "Ethel",
    age: 17,
    country: "Ghana"
}

function infData(){
    console.log(person.name +  " " + "is" +" " + person.age + " " + "years old" + " " + "and lives in" + " " + person.country)
}

infData()