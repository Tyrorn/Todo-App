import React, { useState } from "react";
import TodoList from "./TodoList";
import ClearCompleted from "./ClearCompleted";
import TodoModal from "./TodoModal";
import FilterButtons from "./FilterButtons";
import { Filters } from "../types/filters";
import { useTodos } from "../hooks/useTodos";
import "./TodoApp.css";
import type { Todo } from "../types/todo";

const TodoApp: React.FC = () => {
  const { todos, addTodo, toggleTodo, deleteTodo, clearCompletedTodos } =
    useTodos();

  const [isCreatingNewTask, setIsCreatingNewTask] = useState<boolean>(false);
  const [filter, setFilter] = useState<Filters>(Filters.ALL);
  const [searchFilter, setSearchFilter] = useState<string>("");

  function handleFilterChange(filter: Filters) {
    setFilter(filter);
  }

  function handleSearchFilterChange({
    target,
  }: React.ChangeEvent<HTMLInputElement>) {
    setSearchFilter(target.value);
  }

  function filterTodoList() {
    let filteredTodos: Todo[];
    filteredTodos = applyFilter(todos);
    filteredTodos = applySearchFilter(filteredTodos);

    return filteredTodos;
  }

  function applyFilter(list: Todo[]) {
    return list.filter((todo) => {
      if (filter === Filters.ALL) return true;
      if (filter === Filters.COMPLETED) return todo.completed;
      if (filter === Filters.PENDING) return !todo.completed;
    });
  }

  function applySearchFilter(list: Todo[]) {
    return list.filter((todo) => todo.text.includes(searchFilter));
  }

  function createNewTask(newTask: string) {
    addTodo(newTask);
    setIsCreatingNewTask(false);
  }

  return (
    <div className="todo-app-container mx-auto 	flex items-center justify-center">
      <header className="">
        <input
          type="text"
          value={searchFilter}
          onChange={handleSearchFilterChange}
          placeholder="Type to search..."
        />
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
        todos={filterTodoList()}
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
