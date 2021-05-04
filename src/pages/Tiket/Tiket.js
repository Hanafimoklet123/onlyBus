import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./Tiket.css";
import { PageHeader, Form, Input, InputNumber, Button, Card, DatePicker, Row, Col } from "antd";
import { values } from "mobx";
const layout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 19,
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
      <div className="site-card-border-less-wrapper" style={{ marginLeft: "90px"}}>
        <Card title="Pesan Tiket" bordered={false} style={{ width: 800 }}>
          <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
            <Row>
              <Col span={10}>
                <Form.Item
                  // name={["user", "name"]}
                  label="Kota Asal :"
                  rules={[{}]}
                >
                  <Input style={{ marginLeft: " 20px", width: "70%" }} />
                </Form.Item>
              </Col>
              <Col span={14}>
                <Form.Item
                  // name={[ "address" ]}
                  label="Kota Tujuan :"
                  rules={[{}]}
                >
                  <Input style={{ marginRight: "20px", width: "70%" }} />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Form.Item
                  name={["user", "jumlah"]}
                  label="Jmlh Kursi :"
                  rules={[
                    {
                      type: "number",
                      min: 0,
                      max: 99,
                    },
                  ]}
                >
                  <InputNumber style={{ marginLeft: "8px", width: "40%" }} />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Item label="Date" style={{textAlign:"left"}}>
                  <DatePicker style={{ marginLeft: "45px" }} />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 9 }}>
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
