import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Api } from "../utility/api";
import { List } from "./List";
import { AddTodo } from "./AddTodo";
import type { CreateTodo, Todo } from "../types/todo";

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    Api
    .get<Todo[]>("todos")
    .then((response) => setTodos(response.data));
  }, [])

  const handleDelete = (id: string) => {
    Api
    .delete(`/todos/${id}`)
    .then(() => {
      setTodos(todos.filter((todo) => todo.id !== id));
    });
  }

  const handleToggle = (todo: Todo) => {
    Api
    .patch(`/todos/${todo.id}`, {
      completed: !todo.completed,
    })
    .then((response) => {
      setTodos(todos.map((t) => (t.id === todo.id ? response.data : t)));
    });
  }

  const handleAdd = (newTodo: CreateTodo) => {
    Api
    .post("/todos", newTodo)
    .then((response) => {
      setTodos([response.data,...todos]);
    });
  }

  const handleDeleteAll = async () => {
    try {
        await Promise.all(
            todos.map(t =>
                Api.delete(`/todos/${t.id}`)
            )
        )
        setTodos([])
    } catch (err) {
        console.error(err)
    }
}

const handleToggleAll = async () => {
    const allChecked = todos.every(t => t.completed)
    const newValue = !allChecked

    try {
        const result = await Promise.all(
            todos.map(t =>
                Api.patch(`/todos/${t.id}`, {
                    completed: newValue
                })
            )
        )
        setTodos(result.map(res => res.data))

    } catch (err) {
        console.error(err)
    }
}


return (
    <div className="container mt-5">
        <div className="row justify-content-center">
            <div className="col-md-6">

                <h2 className="text-center mb-4">📝 Todo App</h2>

                <AddTodo onAddTodo={handleAdd} />

                <button className="btn btn-sm btn-secondary mx-3" onClick={handleToggleAll}>Complete All/Cancel All</button>
                <button className="btn btn-sm btn-secondary" onClick={handleDeleteAll}>Delete All</button>

                <List
                    todos={todos}
                    onDelete={handleDelete}
                    onToggle={handleToggle}
                />

            </div>
        </div>
    </div>
)
}