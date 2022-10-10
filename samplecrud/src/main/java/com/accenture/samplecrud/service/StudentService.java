package com.accenture.samplecrud.service;

import com.accenture.samplecrud.entity.Student;
import com.accenture.samplecrud.exception.StudentException;
import com.accenture.samplecrud.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService
{
    @Autowired
    StudentRepository repository;

    public Student addStudent(Student student)
    {
        return repository.save(student);
    }

    public List<Student> getStudents()
    {
        return repository.findAll();
    }

    public void deleteStudent(int id)
    {
        repository.findById(id)
        .orElseThrow(() -> new StudentException("Student does not exist..."));

        repository.deleteById(id);
    }

	public Student updateStudent(Student student)
	{
	    repository.findById(student.getId())
	    .orElseThrow(() -> new StudentException(
	    "Student with id=" + 
	    student.getId() + 
	    " does not exist"));
	
	    return repository.save(student);
	}
}
