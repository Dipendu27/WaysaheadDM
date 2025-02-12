// src/pages/Contact.js
import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    alert("Thank you for contacting us!");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Contact Us
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 600, mx: 'auto' }}>
        <TextField fullWidth label="Name" name="name" margin="normal" value={formData.name} onChange={handleChange} required />
        <TextField fullWidth label="Email" name="email" margin="normal" value={formData.email} onChange={handleChange} required />
        <TextField fullWidth label="Message" name="message" margin="normal" value={formData.message} onChange={handleChange} multiline rows={4} required />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Send Message
        </Button>
      </Box>
    </Container>
  );
};

export default Contact;
