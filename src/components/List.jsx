import TodoItem from "./TodoItem"

export default function List({todos, onDelete, onToggle}) {

return (
    <div className="list-group mb-3">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
 
}