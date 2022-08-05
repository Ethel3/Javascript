function saveLead(){
    console.log("Button click from onclick attribute")
}

let inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function(){
    console.log("Button clicked from addEventListener")

})