import React from "react";
import "./Widget.scss";
import { KeyboardArrowUp, PersonOutlined, School } from "@mui/icons-material";

const Widget = ({ type }) => {
  let data;

  const amount = 100
  const diff = 20

  switch (type) {
    case "user":
      data = {
        title: "Users",
        link: "See all users",
        isMoney: false,
        icon: <PersonOutlined className="icon" style={
          {
            color: "rgba(0, 0, 0, 0.7)",
            backgroundColor: "#ffae00",
          }
        }/>,
      };
      break;
    case "lecturer":
      data = {
        title: "Lecturers",
        link: "See all Lecturers",
        isMoney: false,
        icon: <School className="icon"  style={
          {
            color: "rgba(0, 0, 0, 0.7)",
            backgroundColor: "#ffae00",
          }
        } />,
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && "$"} {amount}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUp />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
