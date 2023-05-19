import React from "react";
import "./Widget.scss";
import {
  Forum,
  PersonOutlined,
  School,
} from "@mui/icons-material";
import { Link } from "react-router-dom"

const Widget = ({ type }) => {
  let data;

  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "Users",
        link: "/users",
        subtitle: "See all users",
        isMoney: false,
        amount: 100,
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
        link: "/lecturers",
        subtitle: "See all Lecturers",
        isMoney: false,
        amount: 25,
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
        link: "/forum",
        subtitle: "Go to Forum",
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
          {data.amount}
        </span>
        <Link to={data.link}>
        <span className="link">{data.subtitle}</span>
        </Link>
      </div>
      <div className="right">{data.icon}</div>
    </div>
  );
};

export default Widget;
