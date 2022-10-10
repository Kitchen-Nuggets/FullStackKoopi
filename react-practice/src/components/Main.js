import React from 'react'
import TextField from '@mui/material/TextField';
import StudentList from './StudentList';
import { useState , useEffect } from 'react';
import Form from './Form';

function Main() 
{
    const [student, setStudent] = useState();
    const [students, setStudents] = useState();

    function UpdateStudent(id)
    {
        console.log("UpdateStudentFunction(): ")
        /* console.log(id)
        console.log(student.name) */
        fetch(`http://localhost:8080/api/update/${id}`)
        .then((res) => res.json())
        .then((json) => {
            setStudent(json);
            console.log(json);
        });
    }

    function ReloadTable()
    {
        fetch("http://localhost:8080/api/studentList")
        .then((res) => res.json())
        .then((json) => {
            setStudents(json);
            console.log(json);
        });
    }
    
    return (
    <div>
        <Form student={student} ReloadTable={ReloadTable}/>
        <StudentList students={students} UpdateStudent={UpdateStudent}/>
    </div>
    )
}

export default Main