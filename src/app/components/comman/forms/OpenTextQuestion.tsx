"use client";

// OpenTextQuestion.jsx
import React from "react";
import { Input } from "antd";

const OpenTextQuestion = ({ label, value, onChange, isLongAnswer = false }) => {
  return (
    <div>
      <label>{label}</label>
      {isLongAnswer ? (
        <Input.TextArea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={4}
        />
      ) : (
        <Input value={value} onChange={(e) => onChange(e.target.value)} />
      )}
    </div>
  );
};

export default OpenTextQuestion;
