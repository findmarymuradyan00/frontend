import React, { useState } from "react";
import type { CreateTodo } from "../types/todo";

type Form = {
  todoTitle: string;
};

type Props = {
  onAddTodo: (todo: CreateTodo) => void;
};

export const AddTodo: React.FC<Props> = ({ onAddTodo }) => {
  const [form, setForm] = useState<Form>({ todoTitle: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.todoTitle.trim()) {
      alert("wrong input");
      return;
    }

    const newTodo: CreateTodo = {
      title: form.todoTitle,
      completed: false,
    };

    onAddTodo(newTodo);
    setForm({ todoTitle: "" });
  };

 return (
    <form onSubmit={handleSubmit} className="d-flex gap-2 mb-4">
        <input
            type="text"
            name="todoTitle"
            className="form-control"
            placeholder="Enter todo..."
            value={form.todoTitle}
            onChange={handleChange}
        />

        <button type="submit" className="btn btn-dark">
            Add
        </button>
    </form>
)
};