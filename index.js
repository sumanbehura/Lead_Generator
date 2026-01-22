let myLead = [];

const inputEl = document.getElementById("input-el");
const saveBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLead"));

if (leadsFromLocalStorage) {
  myLead = leadsFromLocalStorage;
  render(myLead);
}

tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLead.push(tabs[0].url);
    tabBtn.value = "";
    localStorage.setItem("mylead", JSON.stringify(myLead));
    render(myLead);
  });
});

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `<li>
        <a href='${leads[i]}' target='_blank'>
        ${leads[i]}</a>
        </li>`;
  }
  ulEl.innerHTML = listItems;
}

deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLead = [];
  render(myLead);
});

saveBtn.addEventListener("click", function () {
  myLead.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLead", JSON.stringify(myLead));
  render(myLead);
});

// listItems += "<li><a href='"+myLead[i]+"' target='_blank'>" +myLead[i]+ "</a></li>"

//     li = document.createElement("li")
//     li.textContent = myLead[i]
//     ulEl.append(li)
