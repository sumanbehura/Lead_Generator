let myLead = [];
const inputEl = document.getElementById("input-el");
const saveBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");




saveBtn.addEventListener("click", function () {
  myLead.push(inputEl.value);
  inputEl.value = "";
  renderLeads();
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLead.length; i++) {
    // listItems += "<li><a href='"+myLead[i]+"' target='_blank'>" +myLead[i]+ "</a></li>"

    //     li = document.createElement("li")
    //     li.textContent = myLead[i]
    //     ulEl.append(li)

    listItems += `<li>
        <a href='${myLead[i]}' target='_blank'>
        ${myLead[i]}</a>
        </li>`;

    ulEl.innerHTML = listItems;
  }
}
