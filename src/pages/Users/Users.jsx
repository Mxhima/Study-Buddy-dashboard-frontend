import React from "react";
import "./Users.scss";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import CustomTable from "../../components/Table/Table";

const Users = () => {
  return (
    <div className="users">
      <Sidebar />
      <div className="userContainer">
        <Navbar />
        <div className="userTable">
          <div className="userTitle">
            User Details
            <CustomTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
