import { useState } from "react"

export default function AddTodo({onAdd}){


    const [form, setForm] = useState({
        todoTitle:""
    })

    const [error, setError] = useState(false)

    const handleChange= (e)=>{

        const {name, value} = e.target 

        setForm({...form, [name]:value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

        if(!form.todoTitle.trim()) {
            setError(true)
            return
        }

        const newTodo = {
            id: Date.now(),
            title:form.todoTitle,
            completed:false
        }

        onAdd(newTodo)

        setForm({todoTitle:""})
        setError(false)
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
            {error && <p className="text-danger">you should fill in smth</p>}

        </form>
    )
}