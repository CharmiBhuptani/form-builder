"use client";

// RatingQuestion.jsx
import React from "react";
import { Rate } from "antd";

const RatingQuestion = ({
  label,
  value,
  onChange,
}) => {
  return (
    <div>
      <label>{label}</label>
      <Rate value={value} onChange={onChange} />
    </div>
  );
};

export default RatingQuestion;
