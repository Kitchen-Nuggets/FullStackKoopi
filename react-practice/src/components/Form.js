import TextField from '@mui/material/TextField';
import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import React from "react";
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

const Form = (props) =>
{
    const [studentName, setStudentName] = useState('');
    const [studentSection, setStudentSection] = useState('');

    const [StuNameR, setStuNameR] = React.useState(false);
    const [StuEmailR, setStuEmailR] = React.useState(false);

    const [isUpdating, setIsUpdating] = useState(false);

    useEffect(() => 
    {
        console.log("useEffect from Form.js: ");
        console.log(props.student.name);
        if (props.student !== undefined)
        {
            setIsUpdating(true);

            setStudentName(props.student.name);
            setStudentSection(props.student.section);
        }
    }, [props.student])

    function AddStudent()
    {
        if (studentName.length != 0 && studentSection.length != 0)
        {
            fetch("http://localhost:8080/api/add", {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name:studentName, 
                section:studentSection})
            }).then(response => {
                props.ReloadTable();
                setStudentName("");
                setStudentSection("");
            })
        }

        if (studentName.length == 0)
        {
            setStuNameR(true);
        }
        else
        {
            setStuNameR(false);
        }

        if (studentSection.length == 0)
        {
            setStuEmailR(true);
        }
        else
        {
            setStuEmailR(false);
        }
    }

    function ClearFields()
    {
        setStudentName("");
        setStudentSection("");

        setStuNameR(false);
        setStuEmailR(false);
    }

    function CancelUpdate()
    {
        setIsUpdating(false);

        setStudentName("");
        setStudentSection("");
    }

    const addName = (e) =>
    {
        setStudentName(e.target.value);
    };

    const addSection = (e) =>
    {
        setStudentSection(e.target.value);
    };

    return (
        <div>
            <form>
                <Container
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '90%' },
                    }}
                    noValidate
                    autoComplete="off"

                    display="flex"
                    justifyContent="left"
                    alignItems="center"
                    minHeight="100vh"
                    paddingLeft="250px"
                    paddingRight="250px"
                    >
                        {StuNameR
                        ? 
                        <TextField label="Name" variant="filled" required value={studentName} onChange={addName} helperText="This field is required." error></TextField>
                        :
                        <TextField label="Name" variant="filled" required value={studentName} onChange={addName}></TextField>
                        }
                </Container>

                <Container
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '90%' },
                    }}
                    noValidate
                    autoComplete="off"

                    display="flex"
                    justifyContent="left"
                    alignItems="center"
                    minHeight="100vh"
                    paddingLeft="250px"
                    paddingRight="250px"
                    >
                        {StuEmailR
                        ? 
                        <TextField label="Section" variant="filled" required value={studentSection} onChange={addSection} helperText="This field is required." error></TextField>
                        :
                        <TextField label="Section" variant="filled" required value={studentSection} onChange={addSection}></TextField>
                        }
                    </Container>

                <Stack direction="row" spacing={2} display="flex" justifyContent="center" marginBottom={2} marginTop={2}>
                    {isUpdating
                    ? 
                    <>
                    <Button color="success" variant="contained">CONFIRM</Button>
                    <Button color="error" variant="contained" onClick={() => {CancelUpdate()}}>CANCEL</Button>
                    </>
                    : 
                    <>
                    <Button color="success" variant="contained" onClick={() => {AddStudent()}}>ADD</Button>
                    <Button onClick={() => {ClearFields()}} variant="contained">CLEAR</Button>
                    </>
                    }
                </Stack>
            </form>
        </div>
    )
}

export default Form