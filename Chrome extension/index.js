// chrome://extensions/
let myLeads = []
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const tabBtn = document.getElementById("tab-btn")


if (leadsFromLocalStorage){
  myLeads = leadsFromLocalStorage
  render(myLeads)
}

const tabs = [
  {url: "https://www.linkedin.com/in/akrasi-ethel-akosua-69b428212"}
]

tabBtn.addEventListener("click", function(){
  // console.log(tabs[0].url)
  myLeads.push(tabs[0].url)
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  render(myLeads)
})

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
    <li>
    <a target='_blank' href='${leads[i]}'>
    ${leads[i]}
    </a>
    </li>
    `
    
  }
  ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function(){
  console.log("double clicked!")
  localStorage.clear()
  myLeads = []
  render(myLeads)
})

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
inputEl.value = ""

localStorage.setItem("myLeads", JSON.stringify(myLeads))
  render(myLeads)

  
});

