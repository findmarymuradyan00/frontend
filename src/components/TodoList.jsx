import { useEffect, useState } from "react";
import List from "./List";
import AddTodo from "./AddTodo";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        const dataModified = data.map((d) => ({
          id: d.id,
          title: d.title,
          completed: d.completed,
        }));

        setTodos(dataModified);
      })
      .catch((err) => console.error(err));
  }, []);


  const handleAddTodo = (newTodo) => {
    setTodos([{ ...newTodo }, ...todos]);
  };

  const handleDeleteTodo = (todo) => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  const handleToggleTodo = (todo) => {
    setTodos(
      todos.map((t) =>
        t.id === todo.id ? { ...t, completed: !t.completed } : t,
      ),
    );
  };

  const handleDeleteAllTodos = () => {
    setTodos([]);
  };

  const handleToggleAllTodos = () => {
    const allCompleted = todos.every((t) => t.completed);
    setTodos(
      todos.map((t) =>
        allCompleted ? { ...t, completed: false } : { ...t, completed: true },
      ),
    );
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Todo </h2>
      <AddTodo onAdd={handleAddTodo} />

      <button
        className="btn btn-primary mb-3 mx-4"
        onClick={handleDeleteAllTodos}
      >
        Delete All
      </button>
      <button className="btn btn-primary mb-3" onClick={handleToggleAllTodos}>
        Check/Uncheck
      </button>
      <List
        todos={todos}
        onDelete={handleDeleteTodo}
        onToggle={handleToggleTodo}
      />
    </div>
  );
}
