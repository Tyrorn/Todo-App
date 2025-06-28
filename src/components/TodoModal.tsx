import React from "react";
import NewTodoForm from "./NewTodoForm";

type NewTaskModalProps = {
  onClose: () => void;
  onSubmit: (answer: string) => void;
};

const TodoModal: React.FC<NewTaskModalProps> = ({ onClose, onSubmit }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
        <h2 className="text-xl mb-2">Answer the Questions</h2>
        <NewTodoForm onSubmit={onSubmit} onCancel={onClose} />
      </div>
    </div>
  );
};

export default TodoModal;
