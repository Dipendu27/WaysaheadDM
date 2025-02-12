// src/pages/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleChange = e => setCredentials({ ...credentials, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/login', credentials)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        navigate('/news');
      })
      .catch(err => setErrorMsg('Invalid username or password'));
  };

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Login
      </Typography>
      {errorMsg && (
        <Typography variant="body1" color="error" align="center">{errorMsg}</Typography>
      )}
      <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, mx: 'auto' }}>
        <TextField fullWidth label="Username" name="username" margin="normal" value={credentials.username} onChange={handleChange} required />
        <TextField fullWidth label="Password" name="password" margin="normal" type="password" value={credentials.password} onChange={handleChange} required />
        <Button type="submit" variant="contained" color="success" sx={{ mt: 2 }}>
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
