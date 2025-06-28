import { debounce } from "lodash";
import { useState, useEffect } from "react";
import type { Todo } from "../types/todo";
import { saveTaskstoStorage, getAllTasks } from "../utils/localStorage";

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>(getAllTasks);

  useEffect(() => {
    const handler = debounce(() => {
      saveTaskstoStorage(todos);
    }, 300);
    handler();
    return () => {
      handler.cancel();
    };
  }, [todos]);

  function deleteTodo(id: string) {
    setTodos((prevTodos) => prevTodos.filter((x) => x.id !== id));
  }

  function toggleTodo(id: string) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function addTodo(newTask: string) {
    const todo: Todo = {
      id: crypto.randomUUID(),
      text: newTask,
      completed: false,
      createdAt: Date.now(),
    };

    setTodos((prevTodos) => [...prevTodos, todo]);
  }

  function clearCompletedTodos() {
    setTodos(todos.filter((x) => !x.completed));
  }

  return { todos, addTodo, toggleTodo, deleteTodo, clearCompletedTodos };
}
