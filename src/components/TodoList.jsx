import { useState } from "react"
import List from "./List"
import AddTodo from "./AddTodo"

export default function TodoList() {
  
    const [todos, setTodos] = useState([])

    async function getData() {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos")
        const data = await response.json()

        return data.map(d =>  ({id:d.id, title:d.title, completed:d.completed}))
    }

    const loadData = async () =>{
        const data=await getData()

        setTodos([...todos, ...data])
    }


    const handleAddTodo = (newTodo)=>{
        setTodos([ {...newTodo}, ...todos])
    }

    const handleDeleteTodo = (todo)=>{
        setTodos(todos.filter((t => t.id !== todo.id)))
    }

    const handleToggle = (todo) =>{
        setTodos(todos.map(t => t.id===todo.id ? {...t, completed: !t.completed } : t))
    }

    const handleDeleteAllTodos = ()=>{
        setTodos([])
    }

    const handleToggleAllTodos = ()=>{
        const allCompleted= todos.every(t=> t.completed)
        setTodos(todos.map(t => allCompleted ? ({...t, completed:false}): ({...t, completed:true})))
    }

    
    return (
        <div className="container mt-4">
        <h2 className="mb-3">Todo </h2>
        <AddTodo onAdd={handleAddTodo} />

        <button className="btn btn-primary mb-3" onClick={loadData}>
            Load all data
        </button>
        <button  className="btn btn-primary mb-3 mx-4" onClick={handleDeleteAllTodos}>Delete All</button>
        <button  className="btn btn-primary mb-3" onClick={handleToggleAllTodos}>Check/Uncheck</button>
        <List
            todos={todos}
            onDelete={handleDeleteTodo}
            onToggle={handleToggle}
        />

        </div>
  )
}