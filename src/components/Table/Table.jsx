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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const CustomTable = () => {
  return (
   <div className="tableContainer">
      Lecturer Details
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
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
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
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
