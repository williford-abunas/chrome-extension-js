const inputEl = document.getElementById('input-el')
const saveBtn = document.getElementById('save-btn')
const delBtn = document.getElementById('del-btn')
const ulEl = document.getElementById('ul-el')
const tabBtn = document.getElementById('tab-btn')
let myLeads = []
let leadsFromStorage = JSON.parse(localStorage.getItem('myLeads'))

if (leadsFromStorage) {
  myLeads = leadsFromStorage
  render(myLeads)
}

saveBtn.addEventListener('click', function () {
  myLeads.push(inputEl.value)
  localStorage.setItem('myLeads', JSON.stringify(myLeads))
  render(myLeads)
  inputEl.value = ''
})

tabBtn.addEventListener('click', function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url)
    localStorage.setItem('tabs', JSON.stringify(tabs[0].url))
    render(myLeads)
  })
})

delBtn.addEventListener('click', function () {
  localStorage.clear()
  myLeads = []
  render(myLeads)
})

function render(leads) {
  let single = ''
  for (let i = 0; i < leads.length; i++) {
    single += `<li><a target="_blank" href="${leads[i]}">${leads[i]}</a></li>`
  }
  ulEl.innerHTML = single
}
