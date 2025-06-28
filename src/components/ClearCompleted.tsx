import React from "react";

interface ClearCompletedProps {
  onPressClear: () => void;
}

const ClearCompleted: React.FC<ClearCompletedProps> = ({ onPressClear }) => {
  return <button onClick={onPressClear}>Clear Completed tasks</button>;
};

export default ClearCompleted;
