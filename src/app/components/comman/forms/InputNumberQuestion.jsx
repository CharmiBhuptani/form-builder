"use client";

import React from "react";
import { Form, InputNumber } from "antd";

const InputNumberQuestion = ({ label, value, onChange }) => (
  <Form.Item label={label}>
    <InputNumber value={value} onChange={onChange} />
  </Form.Item>
);

export default InputNumberQuestion;
