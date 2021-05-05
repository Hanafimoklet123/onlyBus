import React, { useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./Tiket.css";
import { PageHeader, Form, Input, InputNumber, Button, Card, DatePicker, Row, Col, Table, Space, Modal } from "antd";
import { values } from "mobx";

//Deklarasi Table
const { Column, ColumnGroup } = Table;

const layout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 19,
  },
};

// Table
const data = [
  {
    key: "1",
    kotaAsal: "Bekasi",
    kotaTujuan: "Surabaya",
    date: "Selasa",
    tiket: 200,
    pesan: ["button"],
  },
  {
    key: "2",
    kotaAsal: "Malang",
    kotaTujuan: "Tangerang",
    date: "Kamis",
    tiket: 200,
    pesan: ["button"],
  },
  {
    key: "1",
    kotaAsal: "Solo",
    kotaTujuan: "Tangerang",
    date: "Senin",
    tiket: 200,
    pesan: ["button"],
  },
];

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
  //Modal
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

  // Code PageHeader
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
      <div>
        <Table dataSource={data} style={{ marginTop: "20px" }}>
          <ColumnGroup title="Perjalanan" style={{ paddingLeft: "10px" }}>
            <Column title="Kota Asal" dataIndex="kotaAsal" key="kotaAsal" />
            <Column title="Kota Tujuan" dataIndex="kotaTujuan" key="kotaTujuan" />
          </ColumnGroup>
          <Column title="Hari" dataIndex="date" key="date" />
          <Column title="Tiket Tersedia" dataIndex="tiket" key="tiket" />
          <Column
            title="Pesan"
            key="pesan"
            render={(text, record) => (
              <Space size="middle">
                <Button type="primary" onClick={showModal}>
                  Checkin
                </Button>
                <Modal title="Pesan Tiket" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                  <div className="site-card-border-less-wrapper" style={{}}>
                    <Card bordered={false}>
                      <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                        <Row>
                          <Col>
                            <Form.Item
                              // name={["user", "name"]}
                              label="Nama"
                              rules={[{required: true}]}
                              style={{ marginRight: '50px'}}
                            >
                              <Input style={{ marginLeft: " 70px", width: "70%" }} />
                            </Form.Item>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Form.Item
                              // name={[ "address" ]}
                              label="No.KTP"
                              rules={[{}]}
                              style={{marginRight:"70px"}}
                            >
                              <Input style={{ marginLeft: " 70px", width: "70%" }} />
                            </Form.Item>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
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
                              <InputNumber style={{ marginLeft: "70px", width: "40%" }} />
                            </Form.Item>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Form.Item label="Date" style={{ textAlign: "left" }}>
                              <DatePicker style={{ marginLeft: "80px" }} />
                            </Form.Item>
                          </Col>
                        </Row>
                        {/* <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 9 }}>
                          <Button type="primary" htmlType="submit">
                            Checkout
                          </Button>
                        </Form.Item> */}
                      </Form>
                    </Card>
                  </div>
                </Modal>
              </Space>
            )}
          />
        </Table>
      </div>
    </div>
  );
};
