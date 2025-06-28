import React, { useEffect, useState } from "react";
import type { Todo } from "../types/todo";
import TodoList from "./TodoList";
import ClearCompleted from "./ClearCompleted";
import TodoModal from "./TodoModal";
import { getAllTasks, saveTaskstoStorage } from "../utils/localStorage";
import debounce from "lodash/debounce";

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(getAllTasks());
  const [isCreatingNewTask, setIsCreatingNewTask] = useState<boolean>(false);

  useEffect(() => {
    const handler = debounce(() => {
      saveTaskstoStorage(todos);
    }, 300);
    handler();
    return () => {
      handler.cancel();
    };
  }, [todos]);

  function handleClearCompleted() {
    setTodos(todos.filter((x) => !x.completed));
  }

  function removeTodo(id: string) {
    setTodos((prevTodos) => prevTodos.filter((x) => x.id !== id));
  }

  function handleToggleComplete(id: string) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function createNewTask(newTask: string) {
    const todo: Todo = {
      id: crypto.randomUUID(),
      text: newTask,
      completed: false,
      createdAt: Date.now(),
    };

    setTodos((prevTodos) => [...prevTodos, todo]);

    setIsCreatingNewTask(false);
  }

  return (
    <div className="todo-app-container">
      <header>
        <button onClick={() => setIsCreatingNewTask(true)}>Add new task</button>
      </header>
      {isCreatingNewTask && (
        <TodoModal
          onClose={() => setIsCreatingNewTask(false)}
          onSubmit={createNewTask}
        />
      )}
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        handleToggleComplete={handleToggleComplete}
      />
      <footer>
        <ClearCompleted onPressClear={handleClearCompleted} />
      </footer>
    </div>
  );
};

export default TodoApp;
