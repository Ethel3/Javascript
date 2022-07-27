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

let sentence = ["Hello","my","name", "is","Ethel"]
let greetingEl = document.getElementById("greeting-el")

for (let i =0; i<sentence.length; i++){
    greetingEl.textContent += sentence[i] +" "
}