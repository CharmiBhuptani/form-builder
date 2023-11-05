"use client";

import React, { useState } from 'react';
import FormBuilder from './components/FormBuilder';
import FormPreview from './components/FormPreview';
import { Row, Col, Layout } from 'antd';
const { Header, Content } = Layout;


export default function Home() {
  const [formState, setFormState] = useState([]);

  return (
    <Layout>
      <Content style={{ padding: '50px' }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} lg={12}>
            <FormBuilder formState={formState} onFormStateChange={setFormState} />
          </Col>
          <Col xs={24} lg={12}>
            <FormPreview questions={formState} />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}
