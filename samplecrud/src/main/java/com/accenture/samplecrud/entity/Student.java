package com.accenture.samplecrud.entity;

import javax.persistence.*;
import java.io.Serializable;

//Missing Annotation
@Entity
public class Student implements Serializable
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String section;

    public Student()
    {

    }

    public Student(int id, String name, String section)
    {
        this.id = id;
        this.name = name;
        this.section = section;
    }

    public int getId()
    {
        return id;
    }

    public void setId(int id)
    {
        this.id = id;
    }

    public String getName()
    {
        return name;
    }

    public void setName(String name)
    {
        this.name = name;
    }

    public String getSection()
    {
        return section;
    }

    public void setSection(String section)
    {
        this.section = section;
    }


}
