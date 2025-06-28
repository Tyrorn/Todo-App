import React, { useState } from "react";

type QuestionFormProps = {
  onSubmit: (answer: string) => void;
  onCancel: () => void;
};

const NewTodoForm: React.FC<QuestionFormProps> = ({ onSubmit, onCancel }) => {
  const [newTask, setNewTask] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit(newTask);
  }

  function onChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    setNewTask(target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTask}
        onChange={onChange}
        placeholder="Type your new task"
      />
      <footer>
        <button className="px-3 py-.5 bg-blue-600 text-white rounded hover:bg-blue-700 ">
          Submit
        </button>
        <button onClick={onCancel}>Cancel</button>
      </footer>
    </form>
  );
};

export default NewTodoForm;
