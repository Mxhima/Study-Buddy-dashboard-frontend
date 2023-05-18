import React from "react";
import "./Lecturers.scss";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import CustomTable from "../../components/Table/Table";
import CustomForm from "../../components/form/Form";
import { Grid } from "@mui/material";

const Lecturers = () => {
  return (
    <div>
      <div className="lecturers">
        <Sidebar />
        <div className="lecturerContainer">
          <Navbar />
          <div className="lecturerTable">
            <div className="lecturerTitle">
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <CustomTable />
                </Grid>
                <Grid item xs={4}>
                  <CustomForm />
                </Grid>
              </Grid>
            </div>
          </div>
          <div className="lecturerDetails"></div>
        </div>
      </div>
    </div>
  );
};

export default Lecturers;
