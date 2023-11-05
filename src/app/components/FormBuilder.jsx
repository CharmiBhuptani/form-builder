"use client";
import React, { useEffect, useState } from "react";
import OpenTextQuestion from "./comman/forms/OpenTextQuestion";
import RatingQuestion from "./comman/forms/RatingQuestion";
import SelectQuestion from "./comman/forms/SelectQuestion";
import DatePickerQuestion from "./comman/forms/DatePickerQuestion";
import InputNumberQuestion from "./comman/forms/InputNumberQuestion";
import SwitchQuestion from "./comman/forms/SwitchQuestion";
import { Form, Input, Button, Select } from "antd";

const { Option } = Select;

const FormBuilder = ({ formState, onFormStateChange }) => {
  const [questions, setQuestions] = useState(formState);
  const [currentQuestionType, setCurrentQuestionType] = useState(null);
  const [currentLabel, setCurrentLabel] = useState("");
  const [currentOptions, setCurrentOptions] = useState([]);
  const [currentOption, setCurrentOption] = useState({ label: "", value: "" });

  // Update parent component whenever questions change
  useEffect(() => {
    onFormStateChange(questions);
  }, [questions, onFormStateChange]);

  const addOption = () => {
    setCurrentOptions([...currentOptions, currentOption]);
    setCurrentOption({ label: "", value: "" }); // Reset the option input fields
  };

  const addQuestion = () => {
    const newQuestion = {
      type: currentQuestionType,
      label: currentLabel,
      options: currentQuestionType === "select" ? currentOptions : undefined, // Include options for select type questions
      answer: "",
    };
    setQuestions([...questions, newQuestion]);
    setCurrentQuestionType(null);
    setCurrentLabel("");
    setCurrentOptions([]); // Reset the options
  };

  const updateQuestion = (index, key, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index][key] = value;
    setQuestions(updatedQuestions);
  };

  const submitForm = () => {
    // Handle form submission here
    console.log(questions);
  };

  return (
    <div style={{ background: "white", padding: "20px", borderRadius: "8px" }}>
      <Form layout="vertical">
        <Select
          placeholder="Select question type"
          value={currentQuestionType}
          onChange={setCurrentQuestionType}
          style={{ width: "100%", marginBottom: "16px" }}
        >
          <Option value="openText">Open Text</Option>
          <Option value="rating">Rating</Option>
          <Option value="select">Select</Option>
          <Option value="datePicker">Date Picker</Option>
          <Option value="inputNumber">Input Number</Option>
          <Option value="switch">Switch</Option>
        </Select>
        {currentQuestionType === "select" && (
          <>
            <Input
              placeholder="Enter option label"
              value={currentOption.label}
              onChange={(e) =>
                setCurrentOption({ ...currentOption, label: e.target.value })
              }
            />
            <Input
              placeholder="Enter option value"
              value={currentOption.value}
              onChange={(e) =>
                setCurrentOption({ ...currentOption, value: e.target.value })
              }
            />
            <Button type="primary" onClick={addOption}>
              Add Option
            </Button>
          </>
        )}
        {currentQuestionType && (
          <>
            <Input
              placeholder="Enter question label"
              value={currentLabel}
              onChange={(e) => setCurrentLabel(e.target.value)}
              style={{ width: "100%", marginBottom: "16px" }}
            />
            <Button
              type="primary"
              onClick={addQuestion}
              style={{ marginBottom: "24px" }}
            >
              Add Question
            </Button>
          </>
        )}
        {questions.map((question, index) => {
          switch (question.type) {
            case "openText":
              return (
                <OpenTextQuestion
                  key={index}
                  label={question.label}
                  value={question.answer}
                  onChange={(value) => updateQuestion(index, "answer", value)}
                />
              );
            case "rating":
              return (
                <RatingQuestion
                  key={index}
                  label={question.label}
                  value={question.answer}
                  onChange={(value) => updateQuestion(index, "answer", value)}
                />
              );
            case "select":
              return (
                <SelectQuestion
                  key={index}
                  label={question.label}
                  options={question.options} // You'll need to manage options for select type questions
                  value={question.answer}
                  onChange={(value) => updateQuestion(index, "answer", value)}
                />
              );
            case "datePicker":
              return (
                <DatePickerQuestion
                  key={index}
                  label={question.label}
                  value={question.answer}
                  onChange={(value) => updateQuestion(index, "answer", value)}
                />
              );
            case "inputNumber":
              return (
                <InputNumberQuestion
                  key={index}
                  label={question.label}
                  value={question.answer}
                  onChange={(value) => updateQuestion(index, "answer", value)}
                />
              );
            case "switch":
              return (
                <SwitchQuestion
                  key={index}
                  label={question.label}
                  value={question.answer}
                  onChange={(value) => updateQuestion(index, "answer", value)}
                />
              );
            default:
              return null;
          }
        })}
      </Form>

      <Button
        type="primary"
        onClick={submitForm}
        style={{
          marginTop: "16px",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        Submit Form
      </Button>
    </div>
  );
};

export default FormBuilder;
