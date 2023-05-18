import React from "react";
import "./Navbar.scss";
import { Input } from "@mui/material";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import { DarkModeOutlined } from "@mui/icons-material";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <Input type="text" placeholder="Search ..." />
          <SearchOutlined />
        </div>
        <div className="items">
          <div className="item">
            <DarkModeOutlined className="icon"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
