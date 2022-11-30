const input = document.querySelector('.entertask')
const addbutton = document.querySelector('.addtask')
const tasks= document.querySelector('.tasks')

function clickButton(e) {
    e.preventDefault()
    addTodo()
}

// adding todoList
function addTodo() {
    const itemall = document.createElement('div')
    itemall.classList.add('itemall')

    const item = document.createElement('p')
    item.classList.add('item')
    item.innerText= input.value
    itemall.appendChild(item)

    if (input.value === '') return

    const checkbutton = document.createElement("button")
    checkbutton.innerHTML = '<i class="fa fa-check"></i>'
    checkbutton.classList.add("check-button")
    itemall.appendChild(checkbutton)

    const trashbutton = document.createElement("button")
    trashbutton.innerHTML = '<i class="fa fa-times"></i>'
    trashbutton.classList.add("trash-button")
    itemall.appendChild(trashbutton)

    tasks.appendChild(itemall)
    input.value = ''
}

// checking and delete todoList 
function delTodo(e) {
    const item = e.target

    // check
    if (item.classList[0] === 'check-button') {
        const tasks = item.parentElement
        tasks.classList.toggle('checklist')
    }

    // delete
    if (item.classList[0] === 'trash-button') {
        const tasks = item.parentElement
        tasks.remove()
    }
}

addbutton.addEventListener('click', clickButton)
tasks.addEventListener('click', delTodo)
