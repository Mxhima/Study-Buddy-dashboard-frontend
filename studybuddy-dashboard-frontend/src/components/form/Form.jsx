import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import './Form.scss'

const CustomForm = () => {
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      // Add more fields as needed
    });
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Perform necessary actions with the form data, such as saving to a database
      console.log(formData);
      // Reset the form
      setFormData({
        name: '',
        email: '',
        // Reset other fields as needed
      });
    };
  
    return (
      <div className="formContainer">
         Add Lecturer
         <form onSubmit={handleSubmit}>
        <TextField
          name="name"
          label="Name"
          value={formData.name}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          name="email"
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
        {/* Add more TextField components for additional fields */}
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
      </div>
      
    );
  };


export default CustomForm