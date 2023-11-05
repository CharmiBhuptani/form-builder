"use client";

import React from "react";
import { Form, Switch } from "antd";

const SwitchQuestion = ({ label, value, onChange }) => (
  <Form.Item label={label} valuePropName="checked">
    <Switch checked={value} onChange={onChange} />
  </Form.Item>
);

export default SwitchQuestion;
