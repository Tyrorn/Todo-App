import React from "react";
import type { Todo } from "../types/todo";

interface TodoItemProps {
  todo: Todo;
  removeTodo: (id: string) => void;
  handleToggleComplete: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  removeTodo,
  handleToggleComplete,
}) => {
  function handleDelete() {
    removeTodo(todo.id);
  }

  function onToggle() {
    handleToggleComplete(todo.id);
  }

  return (
    <tr>
      <td>{todo.text}</td>
      <td>{todo.completed ? "Completed" : "Pending"}</td>
      <td>
        <button
          className="px-3 py-.5 bg-blue-600 text-white rounded hover:bg-blue-700 "
          onClick={onToggle}
        >
          Toggle
        </button>
        <button
          className="px-4 py-.5 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={handleDelete}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TodoItem;
