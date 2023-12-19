import React, { useState } from 'react';
import { Container, TextField, MenuItem, Button, Typography, AppBar, Toolbar } from '@mui/material';

const AdmissionForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [age, setAge] = useState('');
  const [yogaBatch, setyogaBatch] = useState('');
  const [enrollmentDate, setEnrollmentDate] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (age >= 18 && age <= 65) {
      try {
        // Make a POST request to the backend API
        const response = await fetch('http://localhost:5000/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstName,
            lastName,
            mobileNumber,
            email,
            address,
            age,
            yogaBatch,
            enrollmentDate
          }),
        });

        console.log(response);
        if (response.ok) {
          console.log('Form submitted successfully');
          alert(`Thank you for enrolling, ${firstName} ${lastName}.`);
        } else {
          console.error('Failed to submit form:', response.statusText);
          alert('Failed to submit form. Please try again.');
        }
      } catch (error) {
        console.error('Error during form submission:', error);
        alert('An error occurred. Please try again later.');
      }
    } else {
      alert('Age must be between 18 and 65 to enroll.');
    }
  };

  return (
    <>
    <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            YogaBatch
          </Typography>
        </Toolbar>
      </AppBar>
    <Container maxWidth="sm" style={{ marginTop: '5%', padding: '2%', borderRadius: '15px', boxShadow: '0px 0px 10px rgba(0,0,0,0.2)', backgroundColor: '#fff' }}>
      <Typography variant="h5" component="h1" gutterBottom style={{ textAlign: 'center' }}>
        Admission Form
      </Typography>
      <form onSubmit={handleSubmit} noValidate>
        <TextField
          label="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          fullWidth
          required
          style={{ margin: '10px 0' }}
        />
        <TextField
          label="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          fullWidth
          required
          style={{ margin: '10px 0' }}
        />
        <TextField
          label="Mobile Number"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          inputProps={{ maxLength: 10 }}
          fullWidth
          required
          style={{ margin: '10px 0' }}
        />
        <TextField
          label="Email ID"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          required
          style={{ margin: '10px 0' }}
        />
        <TextField
          label="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          multiline
          rows={4}
          fullWidth
          required
          style={{ margin: '10px 0' }}
        />
        <TextField
          label="Age"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          fullWidth
          required
          style={{ margin: '10px 0' }}
        />
        <TextField
          select
          label="Select yogaBatch"
          value={yogaBatch}
          onChange={(e) => setyogaBatch(e.target.value)}
          fullWidth
          required
          style={{ margin: '10px 0' }}
        >
          <MenuItem value="6-7AM">6-7AM</MenuItem>
          <MenuItem value="7-8AM">7-8AM</MenuItem>
          <MenuItem value="8-9AM">8-9AM</MenuItem>
          <MenuItem value="5-6PM">5-6PM</MenuItem>
        </TextField>

        <TextField
          label="Enrollment Date"
          type="text"
          placeholder="dd/mm/yyyy"
          value={enrollmentDate}
          onChange={(e) => setEnrollmentDate(e.target.value)}
          fullWidth
          required
          style={{ margin: '10px 0' }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: '20px', marginBottom: '10px' }}
        >
          Enroll
        </Button>
      </form>
    </Container>
    </>
  );
};

export default AdmissionForm;
