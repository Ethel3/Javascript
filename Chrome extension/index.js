// chrome://extensions/
let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

let leads = localStorage.getItem("myLeads")
console.log(leads)

// localStorage.clear()


inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
inputEl.value = ""
  renderLeads()
});
function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    // console.log(myLeads[i]);
    // listItems += "<li><a target='_blank' href='"+ myLeads[i] +"'>" + myLeads[i] + "</a></li>" + " ";
    listItems += `
    <li>
    <a target='_blank' href='${myLeads[i]}'>
    ${myLeads[i]}
    </a>
    </li>
    `
    
  }

  ulEl.innerHTML = listItems;

  //    const li =  document.createElement("li")
  //    li.textContent = myLeads[i]
  //    ulEl.append(li)
}
