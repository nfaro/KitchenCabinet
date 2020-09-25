import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../static/index.css";
import { Menu } from "antd";

export default function SideNav({ props = [] }) {
  const [isSelected, setSelected] = useState("");

  const handleClick = (e) => {
    setSelected(e.key);
  };

  return (
    <Menu
      onClick={handleClick}
      style={{
        width: "200px",
        height: "calc(" + window.innerHeight.toString() + "px - 62px)",
        marginTop: "-1px",
        backgroundColor: "rgba(34, 135, 23, 0.3)",
        padding: "5px 0px",
      }}
      selectedKeys={[isSelected]}
      mode="vertical"
    >
      {props.map(({ name, link, key }) => (
        <Menu.Item className="highlightChangeVertical" key={key}>
          <a className="highlightChangeVertical" href={link}>
            <h4 style={{ marginBottom: "0" }}>{name}</h4>
          </a>
        </Menu.Item>
      ))}
    </Menu>
  );
}
