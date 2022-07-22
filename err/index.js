let errorParagraph = document.getElementById("error")
console.log(errorParagraph)

function purchase() {
    console.log("buttom clicked")
    errorParagraph.textContent = "Something went wrong"
    
}