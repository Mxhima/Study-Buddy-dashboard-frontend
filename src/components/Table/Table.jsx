// import React, { useState, useEffect } from 'react';
// import './Table.scss'
// import { Button, Table,TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
// import firebase from 'firebase';

//  firebase.initializeApp(firebaseConfig);

// const CustomTable = () => {
//    const [data, setData] = useState([]);

//    useEffect(() => {
//       // Fetch data from Firebase collection
//       const fetchData = async () => {
//         const db = firebase.firestore();
//         const collectionRef = db.collection('yourCollection');

//         try {
//           const snapshot = await collectionRef.get();
//           const fetchedData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//           setData(fetchedData);
//         } catch (error) {
//           console.error('Error fetching data:', error);
//         }
//       };

//       fetchData();
//     }, []);

//     const handleDelete = async (id) => {
//       const db = firebase.firestore();
//       const collectionRef = db.collection('yourCollection');

//       try {
//         await collectionRef.doc(id).delete();
//         setData(data.filter((item) => item.id !== id));
//       } catch (error) {
//         console.error('Error deleting record:', error);
//       }
//     };

//    return (
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>ID</TableCell>
//               <TableCell>Name</TableCell>
//               <TableCell>Email</TableCell>
//               <TableCell>Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {data.map((row) => (
//               <TableRow key={row.id}>
//                 <TableCell>{row.id}</TableCell>
//                 <TableCell>{row.name}</TableCell>
//                 <TableCell>{row.email}</TableCell>
//                 <TableCell>
//                   <Button variant="contained" color="secondary" startIcon={<Delete />} onClick={() => handleDelete(row.id)}>
//                     Delete
//                   </Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     );
// }

// export default CustomTable

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import './Table.scss'
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
// import { Delete } from "@mui/icons-material";

function createData(fname, faculty, email, phone, studyareas, modules) {
  return { fname, faculty, email, phone, studyareas, modules };
}

const rows = [
  createData("Pavithra Kankanamge", "Computing", "pavithras@nsbm.ac.lk", "0457612121", "Software Quality Assurance", "SQA, SPM"),
  createData("Pavithra Kankanamge", "Computing", "pavithras@nsbm.ac.lk", "0457612121", "Software Quality Assurance", "SQA, SPM"),
  createData("Pavithra Kankanamge", "Computing", "pavithras@nsbm.ac.lk", "0457612121", "Software Quality Assurance", "SQA, SPM"),
  createData("Pavithra Kankanamge", "Computing", "pavithras@nsbm.ac.lk", "0457612121", "Software Quality Assurance", "SQA, SPM"),
  createData("Pavithra Kankanamge", "Computing", "pavithras@nsbm.ac.lk", "0457612121", "Software Quality Assurance", "SQA, SPM"),
  createData("Pavithra Kankanamge", "Computing", "pavithras@nsbm.ac.lk", "0457612121", "Software Quality Assurance", "SQA, SPM"),
];

const CustomTable = () => {
  return (
   <div className="tableContainer">
      Lecturer Details
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Full Name</TableCell>
            <TableCell align="right">Faculty</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone Number</TableCell>
            <TableCell align="right">Study Areas</TableCell>
            <TableCell align="right">Teaching Modules</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.fname}
              </TableCell>
              <TableCell align="right">{row.faculty}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.studyareas}</TableCell>
              <TableCell align="right">{row.modules}</TableCell>
              <TableCell align="right">
                <Button>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   </div>
    
  );
};

export default CustomTable;
