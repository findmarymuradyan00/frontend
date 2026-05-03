import type { Todo } from "../types/todo";
import { TodoItem } from "./TodoItem";

type Props = {
  todos: Todo[];
  onDelete: (id: string) => void;
  onToggle: (todo: Todo) => void;
};

export const List: React.FC<Props> = ({ todos, onDelete, onToggle }) => {
  return (
    <div className="d-flex flex-column gap-2 my-3">
        {todos.map(todo => (
            <TodoItem
                key={todo.id}
                todo={todo}
                onDelete={onDelete}
                onToggle={onToggle}
            />
        ))}
    </div>
)
};