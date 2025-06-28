import React from "react";
import type { Todo } from "../types/todo";
import TodoItem from "./TodoItem";
// import TodoItem from

interface TodoListProps {
  todos: Todo[];
  removeTodo: (id: string) => void;
  handleToggleComplete: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  removeTodo,
  handleToggleComplete,
}) => {
  return (
    <table className="todo-list-table">
      <thead>
        <tr>
          <th>Task</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            handleToggleComplete={handleToggleComplete}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TodoList;
