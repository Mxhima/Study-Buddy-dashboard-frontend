import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import './Form.scss'
import { db } from '../../firebase/firebase';
import { addDoc, collection } from "firebase/firestore";

const CustomForm = () => {
  const lecturerCollectionRef = collection(db, "lecturers");

    const [fullname, setfullname] = useState("")
    const [email, setemail] = useState("")
    const [phone, setphone] = useState("")
    const [faculty, setfaculty] = useState("")
    const [studyareas, setstudyareas] = useState("")
    const [modules, setmodules] = useState("");

    const createLecturer = async () => {
      await addDoc(lecturerCollectionRef, {
          fullname: fullname,
          email: email,
          phone: phone,
          faculty: faculty,
          modules: modules,
          studyareas: studyareas,
      });

      window.location.reload()
  }
  
    return (
      <div className="formContainer">
         Add Lecturer
         <form>
        <TextField
          name="Fullname"
          label="FullName"
          onChange={(e) => {setfullname(e.target.value)}}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          name="email"
          label="Email"
          type="email"
          onChange={(e) => {setemail(e.target.value)}}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          name="email"
          label="Phone"
          type="text"
          onChange={(e) => {setphone(e.target.value)}}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          name="Faculty"
          label="Faculty"
          type="text"
          onChange={(e) => {setfaculty(e.target.value)}}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          name="Study Areas"
          label="Study Areas"
          type="text"
          onChange={(e) => {setstudyareas(e.target.value)}}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          name="Modules"
          label="Teaching Modules"
          type="email"
          onChange={(e) => {setmodules(e.target.value)}}
          required
          fullWidth
          margin="normal"
        />
        {/* Add more TextField components for additional fields */}
        <Button type="submit" variant="contained" color="primary" onClick={createLecturer}>
          Submit
        </Button>
      </form>
      </div>

    );
  };
export default CustomForm