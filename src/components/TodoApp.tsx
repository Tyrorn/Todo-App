import React, { useState } from "react";
import TodoList from "./TodoList";
import ClearCompleted from "./ClearCompleted";
import TodoModal from "./TodoModal";
import FilterButtons from "./FilterButtons";
import { Filters } from "../types/filters";
import { useTodos } from "../hooks/useTodos";

const TodoApp: React.FC = () => {
  const { todos, addTodo, toggleTodo, deleteTodo, clearCompletedTodos } =
    useTodos();

  const [isCreatingNewTask, setIsCreatingNewTask] = useState<boolean>(false);
  const [filter, setFilter] = useState<Filters>(Filters.ALL);

  function handleFilterChange(filter: Filters) {
    setFilter(filter);
  }

  function createNewTask(newTask: string) {
    addTodo(newTask);
    setIsCreatingNewTask(false);
  }

  return (
    <div className="todo-app-container">
      <header>
        <FilterButtons filter={filter} onFilterChange={handleFilterChange} />
        <button onClick={() => setIsCreatingNewTask(true)}>Add new task</button>
      </header>
      {isCreatingNewTask && (
        <TodoModal
          onClose={() => setIsCreatingNewTask(false)}
          onSubmit={createNewTask}
        />
      )}
      <TodoList
        todos={todos.filter((todo) => {
          if (filter === Filters.ALL) return true;
          if (filter === Filters.COMPLETED) return todo.completed;
          if (filter === Filters.PENDING) return !todo.completed;
        })}
        removeTodo={deleteTodo}
        handleToggleComplete={toggleTodo}
      />
      <footer>
        <ClearCompleted onPressClear={clearCompletedTodos} />
      </footer>
    </div>
  );
};

export default TodoApp;
