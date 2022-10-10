package com.accenture.samplecrud.repository;

import com.accenture.samplecrud.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

//Missing Annotation
@Repository
public interface StudentRepository extends JpaRepository<Student, Integer>
{

}
