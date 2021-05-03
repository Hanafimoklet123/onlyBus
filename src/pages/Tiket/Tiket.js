import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./Tiket.css";
import { PageHeader, Form, Input, InputNumber, Button, Card } from "antd";
import { values } from "mobx";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

export const Tiket = () => {
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <div>
      <PageHeader
        style={{
          padding: 0,
          margin: 0,
          height: 40,
          backgroundColor: "transparent",
        }}
      ></PageHeader>
      <div className="site-card-border-less-wrapper">
        <Card title="Card title" bordered={false} style={{ width: 600 }}>
          <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
            <Form.Item
              name={["user", "name"]}
              label="Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["user", "email"]}
              label="Email"
              rules={[
                {
                  type: "email",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["user", "age"]}
              label="Age"
              rules={[
                {
                  type: "number",
                  min: 0,
                  max: 99,
                },
              ]}
            >
              <InputNumber />
            </Form.Item>
            <Form.Item name={["user", "website"]} label="Website">
              <Input />
            </Form.Item>
            <Form.Item name={["user", "introduction"]} label="Introduction">
              <Input.TextArea />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button type="primary" htmlType="submit">
                Checkout
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
      ,
    </div>
  );
};
