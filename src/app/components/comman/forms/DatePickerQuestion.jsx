"use client";

import React from "react";
import { Form, DatePicker } from "antd";

const DatePickerQuestion = ({ label, value, onChange }) => (
  <Form.Item label={label}>
    <DatePicker value={value} onChange={onChange} />
  </Form.Item>
);

export default DatePickerQuestion;
