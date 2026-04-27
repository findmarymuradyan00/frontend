export default function TodoItem({todo, onToggle, onDelete}) {
   return (
    <div className="list-group-item d-flex justify-content-between align-items-center">
      
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo)}
        />
        <label
          className={`form-check-label ${todo.completed ? "text-decoration-line-through" : ""}`}
        >
          {todo.title}
        </label>
      </div>

      <button
        className="btn btn-danger btn-sm"
        onClick={() => onDelete(todo)}
      >
        Delete
      </button>
    </div>
  )
    
}