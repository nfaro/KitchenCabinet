import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../static/index.css";
import { Menu, Image } from "antd";
import {
  CoffeeOutlined,
  AppstoreOutlined,
  FileTextOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

export default function Header({ pageTitle = "" }) {
  const [isSelected, setSelected] = useState(pageTitle);

  const handleClick = (e) => {
    setSelected(e.key);
  };

  return (
    <Menu
      onClick={handleClick}
      style={{ backgroundColor: "rgba(34, 135, 23, 0.7)", padding: "5px 0px" }}
      selectedKeys={[isSelected]}
      mode="horizontal"
    >
      <Menu.Item className="highlightChange" key="logo">
        <div style={{ display: "flex" }}>
          <Image
            src={require("../../static/logo-removebg.png")}
            height={50}
            width={50}
            alt="Kitchen Cabinet Logo"
          />
          <a className="highlightChange" href="/dashboard">
            <h2 style={{ marginBottom: "0", paddingTop: "3px" }}>
              KitchenCabinet
            </h2>
          </a>
        </div>
      </Menu.Item>
      <Menu.Item
        className="highlightChange"
        key="dashboard"
        icon={<AppstoreOutlined />}
      >
        <a className="highlightChange" href="/dashboard">
          Dashboard
        </a>
      </Menu.Item>
      <Menu.Item
        className="highlightChange"
        key="ingredients"
        icon={<CoffeeOutlined />}
      >
        <a className="highlightChange" href="/ingredients">
          Ingredients
        </a>
      </Menu.Item>
      <Menu.Item
        className="highlightChange"
        key="recipes"
        icon={<FileTextOutlined />}
      >
        <a className="highlightChange" href="/recipes">
          Recipes
        </a>
      </Menu.Item>
      <Menu.Item
        className="highlightChange"
        key="settings"
        style={{ float: "right", top: "5px" }}
        icon={<SettingOutlined style={{ fontSize: "20px" }} />}
      ></Menu.Item>
    </Menu>
  );
}
