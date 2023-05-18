import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Dashboard.scss";
import Navbar from "../../components/Navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboardContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="lecturer" />
          <Widget type="forum" />
        </div>
        <div className="charts">
          <Featured />
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
