// src/pages/Home.js
import React from 'react';
import { Container, Typography } from '@mui/material';

const Home = () => (
  <Container sx={{ textAlign: 'center', py: 8 }}>
    <Typography variant="h3" gutterBottom>
      Welcome to WaysAhead Global
    </Typography>
    <Typography variant="h6">
      Transforming business with AI, Data Analytics & Innovation
    </Typography>
  </Container>
);

export default Home;
