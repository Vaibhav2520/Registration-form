import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { fetchPost } from "../firestore/readCandidates";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const ListView = () => {
  const [candidateData, setCandidateData] = useState([]);

  const fetchCandidates = async () => {
    const data = await fetchPost();
    setCandidateData(data);
  };

  useEffect(() => {
    fetchCandidates();
  }, []);
  // State and other logic can be added here

  let navigate = useNavigate();

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Hobbies</TableCell>
              <TableCell align="right">Gender&nbsp;</TableCell>
              <TableCell align="right">State&nbsp;</TableCell>
              <TableCell align="right">Resume&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {candidateData.map((row) => (
              <TableRow
                onClick={(e) => navigate(`/detailView/${row.id}`)}
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row?.hobbies}</TableCell>
                <TableCell align="right">{row?.gender}</TableCell>
                <TableCell align="right">{row?.state}</TableCell>
                <TableCell align="right">{row?.resume}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <br />
      <br />
      <br />
      <Button onClick={() => navigate("/register")} variant="contained">
        Register
      </Button>
    </div>
  );
};

export default ListView;
