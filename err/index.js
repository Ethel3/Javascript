let errorParagraph = document.getElementById("error")
console.log(errorParagraph)

function purchase() {
    console.log("Buttom clicked")
    errorParagraph.textContent = "Something ocurred"
    
}