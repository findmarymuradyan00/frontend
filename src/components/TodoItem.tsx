import type React from "react";
import type { Todo } from "../types/todo";

type Props = {
  todo: Todo;
  onDelete: (id: string) => void;
  onToggle: (todo: Todo) => void;
};

export const TodoItem: React.FC<Props> = ({
  todo,
  onDelete,
  onToggle,
}) => {
 return (
    <div className="card p-3 shadow-sm">
        <div className="d-flex justify-content-between align-items-center">

            <span
                style={{
                    textDecoration: todo.completed ? "line-through" : "none"
                }}
            >
                {todo.title}
            </span>

            <div className="d-flex gap-2">
                <button
                    className={`btn btn-sm ${todo.completed ? "btn-warning" : "btn-success"}`}
                    onClick={() => onToggle(todo)}
                >
                    {todo.completed ? "Cancel" : "Complete"}
                </button>

                <button
                    className="btn btn-sm btn-danger"
                    onClick={() => onDelete(todo.id)}
                >
                    Delete
                </button>
            </div>

        </div>
    </div>
)
}