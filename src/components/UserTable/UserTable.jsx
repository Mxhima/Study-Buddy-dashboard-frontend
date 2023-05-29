import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { Button } from "@mui/material"
import * as React from "react"
import Paper from "@mui/material/Paper"
import "./UserTable.scss"

const CustomTable2 = () => {
  const [user, setUser] = React.useState([]);
  const userCollectionRef = collection(db, "Users");

  const getUsers = async () => {
    const data = await getDocs(userCollectionRef);
    setUser(
      data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
    );
  };

  const handleDelete = async (id) => {
    const docRef = doc(db, "Users", id);
    await deleteDoc(docRef);
    window.location.reload();
  };

  React.useEffect(() => {
    getUsers();
    console.log(user);
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
              <TableCell align="right">Degree</TableCell>
              <TableCell align="right">Academic Interests</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.FullName}
                </TableCell>
                <TableCell align="right">{row.Faculty}</TableCell>
                <TableCell align="right">{row.Email}</TableCell>
                <TableCell align="right">{row.PhoneNo}</TableCell>
                <TableCell align="right">{row.Degree}</TableCell>
                <TableCell align="right">{row.AcademicInterests}</TableCell>
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

export default CustomTable2;
