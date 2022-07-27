import {
  CalendarOutlined,
  FileOutlined,
  PieChartOutlined,
  FileAddOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import React, { useState } from "react";
import { render } from "react-dom";
import "./App.css";
import "antd/dist/antd.css";

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("DASHBOARD", "1", <PieChartOutlined />),
  getItem("CLIENTS", "2", <UsergroupAddOutlined />),
  getItem("RESERVATIONS", "3", <FileAddOutlined />),
  getItem("CALENDAR", "4", <CalendarOutlined />),
  // getItem("User", "sub1", <UserOutlined />, [
  //   getItem("Tom", "3"),
  //   getItem("Bill", "4"),
  //   getItem("Alex", "5"),
  // ]),
];

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        />
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            {/* Bill is a cat. */}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Salon Express ©2022 Created by Eyepax
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
