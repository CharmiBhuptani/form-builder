"use client";

// QuestionConditional.jsx
import React from "react";

const QuestionConditional = ({ condition, children }) => {
  if (!condition()) {
    return null;
  }

  return <>{children}</>;
};

export default QuestionConditional;
