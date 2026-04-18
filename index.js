const data = JSON.parse(localStorage.getItem("data")) || []

function saveData() {
  localStorage.setItem("data", JSON.stringify(data))
}

function deleteTodo(todoItem, todo) {
  const index =data.findIndex(todoObj => todoObj.title === todo.title)

  if (index >-1) {
    data.splice(index, 1)
    saveData()
  }

  todoItem.remove()
}

function createTodoElement(todo) {
  const todoItem =document.createElement("div")
  todoItem.classList.add("todo-item")

  const todoMainContent = document.createElement("div")

  const todoTick = document.createElement("input")
  todoTick.type ="checkbox"
  todoTick.classList.add("todo-tick")

  const todoTitle = document.createElement("label")
  todoTitle.textContent = todo.title

  if (todo.state === "completed") {
    todoTick.checked= true
    todoTitle.style.textDecoration = "line-through"
  }

  todoTick.onchange =() => {
    const index = data.findIndex(todoObj => todoObj.title === todo.title)

    if (index === -1) return

    if (todoTick.checked) {
      todoTitle.style.textDecoration = "line-through"
      data[index].state = "completed"
    } else {
      todoTitle.style.textDecoration = "none"
      data[index].state = "active"
    }

    saveData()
  }

  const deleteBtn = document.createElement("button")
  deleteBtn.textContent = "Delete"
  deleteBtn.classList.add("todo-delete-btn")

  deleteBtn.onclick = () => deleteTodo(todoItem, todo)

  todoMainContent.append(todoTick, todoTitle)
  todoItem.append(todoMainContent, deleteBtn)

  return todoItem
}

function addToDo(todo) {
  const todoList = document.getElementById("todo-list")
  const todoElement = createTodoElement(todo)

  todoList.prepend(todoElement)
}

data.forEach(todo => addToDo(todo))

const addBtn = document.getElementById("todo-add-btn")

addBtn.onclick = () => {
  const input = document.getElementById("added-todo")
  const todoText = input.value.trim()

  if (todoText) {
    const newTodo = {
      title: todoText,
      state: "active"
    }

    data.push(newTodo)
    saveData()
    addToDo(newTodo)

    input.value = ""
  } else {
    alert("put text")
  }
}