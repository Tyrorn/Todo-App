import React from "react";

interface ClearCompletedProps {
  onPressClear: () => void;
}

const ClearCompleted: React.FC<ClearCompletedProps> = ({ onPressClear }) => {
  return (
    <button
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 active:bg-blue-800 transition"
      onClick={onPressClear}
    >
      Clear Completed tasks
    </button>
  );
};

export default ClearCompleted;
