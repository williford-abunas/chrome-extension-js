const inputEl = document.getElementById('input-el')
const saveBtn = document.getElementById('save-btn')
const ulEl = document.getElementById('ul-el')
let myLeads = []
let items = ''

saveBtn.addEventListener('click', function () {
  myLeads.push(inputEl.value)
  render(myLeads)
  items = ''
  inputEl.value = ''
})

function render(leads) {
  for (let i = 0; i < leads.length; i++) {
    items += `<li><a href="${leads[i]}">${leads[i]}</a></li>`
  }
  ulEl.innerHTML = items
}
