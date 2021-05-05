import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./Contact.css";
import { PageHeader, Form, Input, InputNumber, Button, Card, DatePicker, Row, Col } from "antd";
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
  return (
    <div>
      <div className="row mt-5">
        <div className="col-md-6">
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
      <div className="site-card-border-less-wrapper" style={{ marginLeft: "90px"}}>
        <Card bordered={false} style={{ width: 800 }}>
          <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
            <Row>
              <Col span={10}>
                <Form.Item
                  // name={["user", "name"]}
                  label="Your Name :"
                  rules={[{}]}
                >
                  <Input style={{ marginLeft: " 20px", width: "70%" }} />
                </Form.Item>
              </Col>
              <Col span={10}>
                <Form.Item
                  // name={[ "address" ]}
                  label="Kota Tujuan :"
                  rules={[{}]}
                  ><Input style={{ marginLeft: " 20px", width: "70%" }} />
                  </Form.Item>
                </Col>
                <Col span={10}>
                  <Form.Item
                    // name={[ "address" ]}
                    label="Kota Tujuan :"
                    rules={[{}]}
                ><Input style={{ marginLeft: " 20px", width: "70%" }} />
                </Form.Item>
              </Col>
              <Col span={10}>
                  <Form.Item
                    // name={[ "address" ]}
                    label="number :"
                    rules={[
                      {
                        type: "number",
                        min: 0,
                        max: 99,
                      },
                    ]}
                ><Input style={{ marginLeft: " 20px", width: "70%" }} />
                </Form.Item>
              </Col>
              <Col span={10}>
                  <Form.Item
                    // name={[ "address" ]}
                    label="Kota Tujuan :" 
                    style={{ marginLeft: " 20px" }}
                    rules={[{}]}
                ><Input style={{ marginLeft: " 20px", width: "70%" }} />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 9 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
      ,
    </div>
  );
};
