import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';

export default function Student() {
    console.log("ADD URL:", "http://localhost:31000/student/add");
    console.log("FETCH URL:", "http://localhost:31000/student/getAll");
    // Define style for boxes
    const paperStyle = {padding: '50px 20px', width: 600, margin: "20px auto"}

    // Define variables to hold 'name' and 'address'
    const[name, setName] = React.useState('')
    const[address, setAddress] = React.useState('')

    // Define variable to hold student value while from database
    const[students, setStudents] = React.useState([])

    const handleClick = (e) => {
        /*
            Function to handle button click events
         */
        // Prevent default behaviour of event to handle custom logic
        e.preventDefault()
        // Get student details
        const student = {name, address}
        // Print student details
        console.log(student)

        // Check if 'name' and 'address' are not empty
        if(name.length > 0 && address.length > 0) {
            // Push name and address to Spring Boot Application layer
            fetch("http://localhost:31000/student/add", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(student)
            }).then(() => {
                // Print message to console
                console.log("New Student added");

                // Empty the fields
                setName('');
                setAddress('');
            })
        }
        else {
            console.log("Fields are empty")
        }
    }

    // Fetch student details
    React.useEffect(() => {
        fetch("http://localhost:31000/student/getAll")
        .then(response => response.json())
        .then((result) => {
            setStudents(result);
        })
    }, [])

  return (
    <Container>
        {/* Paper Block to hold Student Input Information */}
        <Paper elevation={3} style={paperStyle}>
            <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1 },
            }}
            noValidate
            autoComplete="off"
            >
            <h1 style={{color: "blue"}}><u>Add Student</u></h1>
            <TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <TextField id="outlined-basic" label="Student Address" variant="outlined" fullWidth 
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />
            <Button variant="contained" onClick={handleClick}>Submit</Button>
            </Box>
        </Paper>
        
        {/* Paper Block to hold Student Information */}
        <Paper elevation={3} style={paperStyle}>
            {students.map(student => (
                <Paper elevation={6} style={{margin: "10px", padding: "15px", textAlign: "left"}} key={student.id}>
                    ID: {student.id} <br/>
                    Name: {student.name} <br/>
                    Address: {student.address} <br/>
                </Paper>
            ))}
        </Paper>
    </Container>
  );
}
