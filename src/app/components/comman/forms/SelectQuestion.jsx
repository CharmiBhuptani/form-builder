"use client";

import React from "react";
import { Form, Select } from "antd";

const { Option } = Select;

const SelectQuestion = ({ label, options, value, onChange }) => (
  <Form.Item label={label}>
    <Select value={value} onChange={onChange}>
      {options.map((option) => (
        <Option key={option.value} value={option.value}>
          {option.label}
        </Option>
      ))}
    </Select>
  </Form.Item>
);

export default SelectQuestion;
