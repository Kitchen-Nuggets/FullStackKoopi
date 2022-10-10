package com.accenture.samplecrud.controller;

import com.accenture.samplecrud.entity.Student;
import com.accenture.samplecrud.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("api/")
@CrossOrigin("http://localhost:4200/")
public class StudentController
{
    @Autowired
    StudentService service;

    @GetMapping("")
    public String helloWorld()
    {
        return "Hello World";
    }

    @PostMapping("add")
    public Student createStudent(@RequestBody Student student)
    {
        return service.addStudent(student);
    }

    @GetMapping("studentList") 
    public List<Student> getStudents()
    {
        return service.getStudents();
    }

    @DeleteMapping("delete/{studentId}") 
    public void deleteStudent(@PathVariable(value="studentId") int id)
    {
        service.deleteStudent(id);
    }

	@PutMapping("update") 
	public Student updateStudent(@RequestBody Student student)
	{
	    return service.updateStudent(student);
	}
}
