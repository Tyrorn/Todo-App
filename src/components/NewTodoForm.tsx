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
        <button>Submit</button>
        <button onClick={onCancel}>Cancel</button>
      </footer>
    </form>
  );
};

export default NewTodoForm;
