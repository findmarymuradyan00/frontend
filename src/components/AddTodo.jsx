import { useState } from "react"

export default function AddTodo({onAdd}){


    const [form, setForm] = useState({
        todoTitle:""
    })

    const handleChange= (e)=>{

        const {name, value} = e.target 

        setForm({...form, [name]:value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

        if(!form.todoTitle.trim()) {
            alert("there is no input")
            return
        }

        const newTodo = {
            id: Date.now(),
            title:form.todoTitle,
            completed:false
        }

        onAdd(newTodo)

        setForm({todoTitle:""})
    }

     return (
        <form onSubmit={handleSubmit} className="mt-3 my-4">
        <div className="input-group">
            <input
                type="text"
                name="todoTitle"
                className="form-control"
                placeholder="Enter todo"
                value={form.todoTitle}
                onChange={handleChange}
            />
            <button className="btn btn-success" type="submit">
            Add
            </button>
        </div>
        </form>
    )
}