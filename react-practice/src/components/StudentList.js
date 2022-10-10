import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Container from '@mui/material/Container';
import { Paper } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
      border: 0,
  },
}));


const StudentList = (props) =>
{
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/studentList")
        .then((res) => res.json())
        .then((json) => {
            setStudents(json);
        });
    }, []);

    useEffect(() => 
    {
      //Reloads Table
      if (props.students !== undefined)
      {
        setStudents(props.students);
      }
    }, [props.students])

    function DeleteUser(id)
    {
      console.log(id);
        fetch(`http://localhost:8080/api/delete/${id}`, {                                                                             
        method: 'DELETE',
        })
        .then(res => {
            fetch("http://localhost:8080/api/studentList")
            .then((res) => res.json())
            .then((json) => {
                setStudents(json);
            });
        }) 
    }

  return (
    <div>
        <Container
        justifyContent="center"
        display="flex"
        >
          <TableContainer component={Paper}>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>ID</StyledTableCell>
                  <StyledTableCell align="left">NAME</StyledTableCell>
                  <StyledTableCell align="left">SECTION</StyledTableCell>
                  <StyledTableCell align="left">ACTIONS</StyledTableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {students.map((student) => (
                  <StyledTableRow key={student.id}>
                    <StyledTableCell component="th" scope="user">
                                    {student.id}
                    </StyledTableCell>
                    <StyledTableCell align="left">{student.name}</StyledTableCell>
                    <StyledTableCell align="left">{student.section}</StyledTableCell>
                    <StyledTableCell align="left">
                      <Stack direction="row" spacing={5}>
                        <Button variant="contained" >VIEW</Button>
                        <Button color="success" variant="contained" onClick={() => {props.UpdateStudent(student.id)}}>UPDATE</Button>
                        <Button onClick={() => {DeleteUser(student.id)}} color="error" variant="contained">DELETE</Button>
                      </Stack>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
    </div>
  )
}

export default StudentList