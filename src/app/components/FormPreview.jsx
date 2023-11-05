"use client";
import React, { useState } from "react";
import OpenTextQuestion from "./comman/forms/OpenTextQuestion";
import RatingQuestion from "./comman/forms/RatingQuestion";
import QuestionConditional from "./QuestionConditional";

const FormPreview = ({ questions }) => {
  // Initialize state for the answers
  const [answers, setAnswers] = useState(questions.map(() => ""));

  // Handler to update answers state
  const handleAnswerChange = (index, newValue) => {
    const newAnswers = [...answers];
    newAnswers[index] = newValue;
    setAnswers(newAnswers);
  };

  return (
    <div style={{ background: "white", padding: "20px", borderRadius: "8px" }}>
      {questions.map((question, index) => (
        <div key={index}>
          {question.type === "openText" && (
            <OpenTextQuestion
              label={question.label}
              value={answers[index]}
              onChange={(e) => handleAnswerChange(index, e?.target?.value)}
            />
          )}
          {question.type === "rating" && (
            <RatingQuestion
              label={question.label}
              value={answers[index]}
              onChange={(value) => handleAnswerChange(index, value)}
            />
          )}
          {/* Add other question types here */}
        </div>
      ))}
    </div>
  );
};

export default FormPreview;
