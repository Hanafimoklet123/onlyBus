import React, { useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./Contact.css";
import { PageHeader, Form, Input, InputNumber, Modal, Button, Card, DatePicker, Row, Col } from "antd";
import { values } from "mobx";
import Img from "../../img/imgContact.png";
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

export const Contact = () => {
  const onFinish = (values) => {
    console.log(values);
  };
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div>
      <div className="row mt-5">
        <div className="col-md-7">
          <h3 className="mb-5">
            <span className="bg-warning text-white p-2">Contact Us</span>
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe eligendi obcaecati facere itaque, veritatis amet voluptatem ab, vero quos a ad eaque minus architecto sit sapiente, commodi inventore doloribus accusantium alias
            corporis neque odio reprehenderit.
          </p>
        </div>
        <div className="col-sm-5">
          <img className="img-fluid" src={Img} alt="" />
        </div>
      </div>
      <PageHeader
        style={{
          padding: 0,
          margin: 0,
          height: 40,
          backgroundColor: "transparent",
        }}
      ></PageHeader>
      <div className="site-card-border-less-wrapper" style={{ marginleft: "90px" }}>
        <Card bordered={false} style={{ width: "100%" }}>
          <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
            <Row>
              <Col span={12}>
                <Form.Item
                  name={["user", "name"]}
                  label="Name"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input placeholder="Enter Your Name" style={{ marginLeft: " 20px", width: "70%" }} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name={["user", "email"]}
                  label="Email Address"
                  rules={[
                    {
                      type: "email",
                    },
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input placeholder="Enter Your Email" style={{ marginLeft: " 20px", width: "70%" }} />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Form.Item
                  // name={[ "address" ]}
                  label="Phone Number"
                  rules={{}}
                >
                  <Input placeholder="(optional) 08..." style={{ marginLeft: " 20px", width: "70%" }} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name={["user", "jumlah"]}
                  label="Ticket ID :"
                  rules={[
                    {
                      type: "number",
                    },
                  ]}
                >
                  <Input placeholder="(optional)" style={{ marginLeft: "20px", width: "70%" }} />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={22}>
                <Form.Item
                  name={["messages"]}
                  label="messages"
                  style={{ marginLeft: " 20px" }}
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input.TextArea placeholder="Tell Us Your Concern" style={{ marginLeft: " 40px", width: "70%" }} />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 9 }}>
              <Button type="primary" onClick={showModal} htmlType={"submit"}>
                Submit
              </Button>
              <Modal 
              title="You sure?" 
              visible={isModalVisible} 
              onOk={handleOk} 
              onCancel={handleCancel}>
                <p>some content</p>
              </Modal>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
};
