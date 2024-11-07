import React from "react";
import Card from "../components/Card";

import "../components/Column.css";

const Column = ({ title }) => {
  return (
    <div className="column">
      <h2>{title}</h2>
      <div className="card-container">
        {/* Example: Render multiple cards */}
        {[...Array(10)].map((_, index) => (
          <Card key={index} />
        ))}
      </div>
    </div>
  );
};

export default Column;
