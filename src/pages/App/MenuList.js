import React, { useEffect, useState } from "react";
import { Menu, Layout } from "antd";
import { Link } from "react-router-dom";
import { CalendarOutlined, ContactsOutlined, FileAddOutlined, HomeOutlined } from "@ant-design/icons";
import { MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined, VideoCameraOutlined, UploadOutlined } from "@ant-design/icons";
import { observer } from "mobx-react-lite";
import { useStore } from "../../utils/useStore";

const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout;

export const MenuList = observer((props) => {
  const store = useStore();
  useEffect(() => {}, []);

  const [setKeys, setSetKeys] = useState(["dashboard"]);

  return (
    <Menu
      defaultOpenKeys={["sub4"]}
      theme="dark"
      style={{
        backgroundColor: "transparent",
        borderRightWidth: 0,
        fontWeight: 500,
        paddingLeft: 0,
      }}
      onClick={({ keyPath, item }) => {
        props.closeLeftDrawer();
      }}
      mode="inline"
      selectedKeys={setKeys}
      onSelect={({ setKeys, item, selectedKeys }) => setSetKeys(selectedKeys)}
      overflowedIndicator={0}
      forceSubMenuRender={true}
    >
      <Menu.Item key="home">
        <Link to={"/app/home"}>
          <HomeOutlined />
          <span style={{backgroundColor: "none"}}>Home</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="ticket">
        <Link to={"/app/tiket"}>
          <FileAddOutlined />
          <span>Tiket</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="contact">
        <Link to={"/app/contact"}>
          <ContactsOutlined />
          <span>Contact Us</span>
        </Link>
      </Menu.Item>
      <Menu.Divider style={{ background: "transparent", paddingTop: 15 }} />
    </Menu>

    // <Layout>
    //   <Sider trigger={null} collapsible collapsed={}>
    //     <div className="logo" />
    //     <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
    //       <Menu.Item key="1" icon={<UserOutlined />}>
    //         nav 1
    //       </Menu.Item>
    //       <Menu.Item key="2" icon={<VideoCameraOutlined />}>
    //         nav 2
    //       </Menu.Item>
    //       <Menu.Item key="3" icon={<UploadOutlined />}>
    //         nav 3
    //       </Menu.Item>
    //     </Menu>
    //   </Sider>
    //   <Layout className="site-layout">
    //     <Header className="site-layout-background" style={{ padding: 0 }}>
    //       {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
    //         className: "trigger",
    //         onClick: this.toggle,
    //       })}
    //     </Header>
    //     <Content
    //       className="site-layout-background"
    //       style={{
    //         margin: "24px 16px",
    //         padding: 24,
    //         minHeight: 280,
    //       }}
    //     >
    //       Content
    //     </Content>
    //   </Layout>
    // </Layout>
  );
});
