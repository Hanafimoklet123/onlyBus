import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Button, Layout, Menu, PageHeader, Popover, Typography, Breadcrumb } from "antd";
import "./index.css";
import { MenuList } from "./MenuList";
import { Link } from "react-router-dom";
import { AppRoute } from "../../routes/app";
import Logo from "../../img/onlybus-d.png";
import Bgimg from "../../img/backbus.jpeg";
import "antd/dist/antd.css";
import { DesktopOutlined, PieChartOutlined, TeamOutlined, FileOutlined, UserOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
// import { IconName } from "react-icons/io";
// import { render } from "@testing-library/react";

const { Text, Paragraph } = Typography;
const { Header, Content, Sider, Footer } = Layout;
const { SubMenu } = Menu;

// export class DesktopLayout extends React.Component {
//   state = {
//     collapsed: false,
//   };

// onCollapse = (collapsed) => {
//   console.log(collapsed);
//   this.setState({ collapsed });
// };

//   render() {
//     const { collapsed, clicked, setClicked } = this.state;
//     return (
//       <Layout style={{ minHeight: "100vh" }}>
//         <Sider
//           collapsible
//           collapsed={collapsed}
//           onCollapse={this.onCollapse}
//           style={{
//             backgroundColor: "red",
//           }}
//         >
//           <div className="logo" />
//           <Menu defaultSelectedKeys={["1"]} mode="inline">
//             <Menu.Item key="1" icon={<PieChartOutlined />}>
//               Home
//             </Menu.Item>
//             <Menu.Item key="2" icon={<DesktopOutlined />}>
//               Tiket
//             </Menu.Item>
//             <Menu.Item key="3" icon={<DesktopOutlined />}>
//               Contact Us
//             </Menu.Item>
//           </Menu>
//         </Sider>
//         <Layout className="site-layout">
//           <Header className="site-layout-background" style={{ padding: 0 }} />
//           <Popover
//             autoAdjustOverflow={true}
//             placement="bottomRight"
//             content={
//               <Menu
//                 type={"line"}
//                 inlineIndent={0}
//                 theme="light"
//                 style={{
//                   backgroundColor: "transparent",
//                   borderRightWidth: 0,
//                   margin: "auto",
//                 }}
//                 mode="inline"
//               >
//                 <Menu.Item>
//                   <Link to="/app/profile">
//                     <span>Profile</span>
//                   </Link>
//                 </Menu.Item>
//                 <Menu.Item
//                   onClick={() => {
//                     // store.authentication.logout();
//                     // return history.push("/login");
//                   }}
//                 >
//                   <span>Sign out</span>
//                 </Menu.Item>
//               </Menu>
//             }
//             title={
//               <Text>
//                 hasbi@gmail.com
//                 {/*{store.userData.email}{" "}*/}
//                 <Paragraph style={{ fontWeight: 400 }} type={"secondary-dark"}>
//                   Administrator
//                   {/*{store.userData.role}*/}
//                 </Paragraph>
//               </Text>
//             }
//             trigger="click"
//             visible={clicked}
//             onVisibleChange={() => setClicked(!clicked)}
//           >
//             <Button size={"default"} style={{}} icon={<UserOutlined style={{ fontSize: "13px" }} />} />
//           </Popover>
//           <Content style={{ margin: "0 16px" }}>
//             <Breadcrumb style={{ margin: "16px 0" }}></Breadcrumb>
//             <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
//               Bill is a cat.
//             </div>
//           </Content>
//         </Layout>
//       </Layout>
//     );
//   }
// }

export const DesktopLayout = () => {

  const [clicked, setClicked] = useState(false);
  return (
    <Layout
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
      </Sider>

      <Layout
        style={{
          paddingLeft: 300,
        }}
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

// export class DesktopLayout extends React.Component {
//   state = {
//     collapsed: true,
//     clicked: false,
//     setClicked: false,
//   };

//   toggle = () => {
//     this.setState({
//       collapsed: !this.state.collapsed,
//     });         
//   };   
//   render() { 
//     return (
//       <Layout
//         theme={"light"}ddddd
//         className={"transpardddddddddddddendddddddddddd"}
//         hasSider={true}
//         style={{
//           paddingLeft: 0,
//           display: "flex",
//           width: "100vw",
//           height: "100vh",
//         }}
//       >
//         <Sider
//           trigger={null}
//           collapsible
//           collapsed={this.state.collapsed}
//           className={"transparent"}
//           width={200}
//           style={{
//             backgroundColor: "#ED6868",
//             overflowX: "hidden",
//             bottom: 0,
//             justifyContent: "flex-start",
//             paddingTop: 20,
//             paddingLeft: 20,
//             position: "fixed",
//             top: 0,
//             zIndex: 10,
//           }}
//         >
//           <div
//             className="logo"
//             style={{
//               paddingLeft: 15,
//               marginBottom: 10,
//             }}
//           />
//           <Menu theme="dark" mode="inline" defaultSelectedKeys={["3"]} defaultOpenKeys={["sub1"]}>
//             <Menu.Item key="1" icon={<PieChartOutlined />}>
//               Option 1
//             </Menu.Item>
//             <Menu.Item key="2" icon={<DesktopOutlined />}>
//               Option 2
//             </Menu.Item>
//             <SubMenu key="sub1" icon={<UserOutlined />} title="User">
//               <Menu.Item key="3">Tom</Menu.Item>
//               <Menu.Item key="4">Bill</Menu.Item>
//               <Menu.Item key="5">Alex</Menu.Item>
//             </SubMenu>
//             <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
//               <Menu.Item key="6">Team 1</Menu.Item>
//               <Menu.Item key="8">Team 2</Menu.Item>
//             </SubMenu>
//             <Menu.Item key="9" icon={<FileOutlined />} />
//           </Menu>
//         </Sider>
//         <Layout
//           style={{
//             paddingLeft: 300,
//           }}
//         >
//           <Header className="site-layout-background" style={{ height: 54, paddingLeft: 0, paddingRight: 0, backgroundColor: "transparent", maxWidth: 1024, display: "flex", alignItems: "center", justifyContent: "flex-end", padding: 0 }}>
//             {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
//               className: "trigger",
//               onClick: this.toggle,
//             })}
//             <Popover
//               autoAdjustOverflow={true}
//               placement="bottomRight"
//               content={
//                 <Menu
//                   type={"line"}
//                   inlineIndent={0}
//                   theme="light"
//                   style={{
//                     backgroundColor: "transparent",
//                     borderRightWidth: 0,
//                   }}
//                   mode="inline"
//                 >
//                   <Menu.Item>
//                     <Link to="/app/profile">
//                       <span>Profile</span>
//                     </Link>
//                   </Menu.Item>
//                   <Menu.Item
//                     onClick={() => {
//                       // store.authentication.logout();
//                       // return history.push("/login");
//                     }}
//                   >
//                     <span>Sign out</span>
//                   </Menu.Item>
//                 </Menu>
//               }
//               title={
//                 <Text>
//                   hasbi@gmail.com
//                   {/*{store.userData.email}{" "}*/}
//                   <Paragraph style={{ fontWeight: 400 }} type={"secondary-dark"}>
//                     Administrator
//                     {/*{store.userData.role}*/}
//                   </Paragraph>
//                 </Text>
//               }
//               trigger="click"
//               visible={this.state.clicked}
//               onVisibleChange={() => this.state.setClicked(!this.state.clicked)}
//             >
//               <Button size={"default"} style={{}} icon={<UserOutlined style={{ fontSize: "13px" }} />} />
//             </Popover>
//           </Header>
//           <Content
//             className="site-layout-background"
//             style={{
//               margin: "24px 16px",
//               padding: 24,
//               minHeight: 280,
//               maxWidth: 1024,
//             }}
//           >
//              <AppRoute />
//           </Content>
//         </Layout>
//       </Layout>
//     );
//   }
// }
