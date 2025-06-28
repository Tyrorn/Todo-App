import type { Todo } from "../types/todo";

export const saveTaskstoStorage = (todos: Todo[]) => {
  localStorage.setItem("Todo Array", JSON.stringify(todos));
};

export const getAllTasks = (): Todo[] => {
  const todosString: string = localStorage.getItem("Todo Array") || "[]";
  return JSON.parse(todosString);
};
