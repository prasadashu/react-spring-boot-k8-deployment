package com.comprehensive.studentsystem.service;

import com.comprehensive.studentsystem.model.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudents();
}
