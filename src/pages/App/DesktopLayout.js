import React, { useState } from "react";
import ReactDOM from 'react-dom';
import { Button, Layout, Menu, PageHeader, Popover, Typography, Breadcrumb } from "antd";
import { MenuList } from "./MenuList";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { AppRoute } from "../../routes/app";
import Logo from "../../img/onlybus-d.png";
import Bgimg from "../../img/backbus.jpeg";
import { DesktopOutlined, PieCharOutlined } from "@ant-design/icons";
import { render } from "@testing-library/react";

const { Text, Paragraph } = Typography;
const { Header, Content, Sider, Footer } = Layout;
const { SubMenu } = Menu;

export const DesktopLayout = () => {
  const [clicked, setClicked] = useState(false);
  // state = {
  //   collapsed: false,
  // };

  // onCollapse = (collapsed) => {
  //   console.log(collapsed);
  //   this.setState({ collapsed });
  // };

  // const { collapsed } = this.state;
  return (
    <Layout
      // style={{ minHeight: "100vh" }}     // Sider baru 
      theme={"light"}
      className={"transparent"}
      hasSider={true}
      style={{
        paddingLeft: 0,
        display: "flex",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Sider
        className={"transparent"}
        width={200}
        style={{
          backgroundColor: "#ED6868",
          overflowX: "hidden",
          bottom: 0,
          justifyContent: "flex-start",
          paddingTop: 20,
          paddingLeft: 20,
          position: "fixed",
          top: 0,
          zIndex: 10,
        }}

        // collapsible                                    //Sider baru 
        // collapsed={collapsed}
        // onCollapse={this.onCollapse}
      >
        <div
            style={{
              paddingLeft: 15,
              marginBottom: 10,
            }}
          >
            <img
              src={Logo}
              style={{
                width: 100,
                height: 100,
              }}
            />
          </div>
          <MenuList closeLeftDrawer={() => {}} />

        {/* <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Option 1
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Option 2
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="User">               // Sider Baru 
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<FileOutlined />}>
            Files
          </Menu.Item>
        </Menu> */}
      </Sider>

      <Layout
        style={{
          paddingLeft: 300,
        }}
        
        // className="site-layout"               // Sider baru 
      >
        <Header
          theme={"light"}
          style={{
            height: 54,
            paddingLeft: 0,
            paddingRight: 0,
            backgroundColor: "transparent",
            maxWidth: 1024,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}

          // className="site-layout-background"                // Sider Baru 
          // style={{ padding: 0 }}
        >
          <Popover
            autoAdjustOverflow={true}
            placement="bottomRight"
            content={
              <Menu
                type={"line"}
                inlineIndent={0}
                theme="light"
                style={{
                  backgroundColor: "transparent",
                  borderRightWidth: 0,
                }}
                mode="inline"
              >
                <Menu.Item>
                  <Link to="/app/profile">
                    <span>Profile</span>
                  </Link>
                </Menu.Item>
                <Menu.Item
                  onClick={() => {
                    // store.authentication.logout();
                    // return history.push("/login");
                  }}
                >
                  <span>Sign out</span>
                </Menu.Item>
              </Menu>
            }
            title={
              <Text>
                hasbi@gmail.com
                {/*{store.userData.email}{" "}*/}
                <Paragraph style={{ fontWeight: 400 }} type={"secondary-dark"}>
                  Administrator
                  {/*{store.userData.role}*/}
                </Paragraph>
              </Text>
            }
            trigger="click"
            visible={clicked}
            onVisibleChange={() => setClicked(!clicked)}
          >
            <Button size={"default"} style={{}} icon={<UserOutlined style={{ fontSize: "13px" }} />} />
          </Popover>
        </Header>
        <Content
          style={{
            maxWidth: 1024,
            // marginTop: 32,
            // margin: "0 16px",      // sider baru 
          }}
        >
          <AppRoute />
        </Content>
      </Layout>
    </Layout>
  );
}


// export default DesktopLayout;
