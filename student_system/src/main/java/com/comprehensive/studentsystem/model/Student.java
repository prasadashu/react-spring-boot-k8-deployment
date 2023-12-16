package com.comprehensive.studentsystem.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Student {

    // Declare variables for a student
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String address;

    public Student() {
    /*
        Constructor for the Student Class
     */

    }

    // Define Setter methods
    public void setId(int id) {
    /*
        Function to set Student ID
     */
        this.id = id;
    }

    public void setName(String name) {
    /*
        Function to set Student Name
     */
        this.name = name;
    }

    public void setAddress(String address) {
    /*
        Function to set Student Address
     */
        this.address = address;
    }

    // Define Getter methods
    public int getId() {
    /*
        Function to get Student ID
     */
        return id;
    }

    public String getName() {
    /*
        Function to get Student Name
     */
        return name;
    }

    public String getAddress() {
    /*
        Function to get Student Address
     */
        return address;
    }
}
