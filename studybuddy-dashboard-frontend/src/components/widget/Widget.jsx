import React from "react";
import "./Widget.scss";
import {
  Forum,
  KeyboardArrowUp,
  PersonOutlined,
  School,
} from "@mui/icons-material";

const Widget = ({ type }) => {
  let data;

  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "Users",
        link: "See all users",
        isMoney: false,
        icon: (
          <PersonOutlined
            className="icon"
            style={{
              color: "rgba(0, 0, 0, 0.7)",
              backgroundColor: "#ffae00",
            }}
          />
        ),
      };
      break;
    case "lecturer":
      data = {
        title: "Lecturers",
        link: "See all Lecturers",
        isMoney: false,
        icon: (
          <School
            className="icon"
            style={{
              color: "rgba(0, 0, 0, 0.7)",
              backgroundColor: "#ffae00",
            }}
          />
        ),
      };
      break;
    case "forum":
      data = {
        title: "Forum",
        link: "Go to Forum",
        isMoney: false,
        icon: (
          <Forum
            className="icon"
            style={{
              color: "rgba(0, 0, 0, 0.7)",
              backgroundColor: "#ffae00",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">{data.icon}</div>
    </div>
  );
};

export default Widget;
