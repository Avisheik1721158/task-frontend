import React from "react";
import Column from "../components/Column";
import "../components/TaskBoard.css";

const TaskBoard = () => {
  const columns = [
    "Incomplete",
    "To Do",
    "Doing",
    "Under Review",
    "Completed",
    "Overdue",
  ];

  return (
    <div className="task-board">
      {columns.map((col, index) => (
        <Column key={index} title={col} />
      ))}
    </div>
  );
};

export default TaskBoard;
