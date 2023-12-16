package com.comprehensive.studentsystem.controller;

import com.comprehensive.studentsystem.model.Student;
import com.comprehensive.studentsystem.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
@CrossOrigin
public class StudentController {
    @Autowired
    private StudentService studentService;

    @PostMapping("/add")
    public String add(@RequestBody Student student) {
    /*
    Method to add data to database
     */
        studentService.saveStudent(student);
        return "New student added";
    }

    @GetMapping("/getAll")
    public List<Student> getAllStudents() {
    /*
    Method to fetch data from database
     */
        return studentService.getAllStudents();
    }
}
