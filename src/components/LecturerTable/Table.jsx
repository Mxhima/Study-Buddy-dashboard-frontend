import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import "./Table.scss";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";
// import { get } from "firebase/database";
// import { Delete } from "@mui/icons-material";

const CustomTable = () => {
  const [lecturer, setLecturer] = React.useState([]);
  const lecturerCollectionRef = collection(db, "lecturers");

  const getLecturers = async () => {
    const data = await getDocs(lecturerCollectionRef);
    setLecturer(
      data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
    );
  };

  const handleDelete = async (id) => {
    const docRef = doc(db, "lecturers", id);
    await deleteDoc(docRef);
    window.location.reload();
  };

  React.useEffect(() => {
    getLecturers();
    console.log(lecturer);
  }, []);

  return (
    <div className="tableContainer">
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
            {lecturer.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.fullname}
                </TableCell>
                <TableCell align="right">{row.faculty}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.phone}</TableCell>
                <TableCell align="right">{row.studyareas}</TableCell>
                <TableCell align="right">{row.modules}</TableCell>
                <TableCell align="right">
                  <Button
                    onClick={() => {
                      handleDelete(row.id);
                    }}
                  >
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
