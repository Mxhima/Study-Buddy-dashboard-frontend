import React from "react";
import "./Lecturers.scss";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import CustomTable from "../../components/Table/Table";
import CustomForm from "../../components/form/Form";

const Lecturers = () => {
  return (
    <div className="lecturers">
      <Sidebar />
      <div className="lecturerContainer">
        <Navbar />
        <div className="lecturerTable">
          <div className="lecturerTitle">
            <CustomTable />
            <CustomForm />
          </div>
        </div>
        <div className="lecturerDetails">
          
        </div>
      </div>
    </div>
  );
};

export default Lecturers;
