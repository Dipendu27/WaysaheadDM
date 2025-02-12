// src/pages/Services.js
import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardActions, Button } from '@mui/material';

const services = [
  { id: 1, title: 'AI Shop Assist', description: 'AI-powered retail assistant to boost in-store sales.' },
  { id: 2, title: 'Geo-Spatial Analytics', description: 'Optimize location strategies with advanced analytics.' },
  { id: 3, title: 'In-Store Analytics', description: 'Real-time insights to enhance customer experience.' },
  { id: 4, title: 'SCM Analytics', description: 'Data-driven solutions for supply chain management.' },
  { id: 5, title: 'Video Analytics', description: 'Transform video data into actionable insights.' },
  { id: 6, title: 'Robotics', description: 'Deploy robotics for an immersive phygital experience.' }
];

const Services = () => (
  <Container sx={{ py: 4 }}>
    <Typography variant="h4" align="center" gutterBottom>
      Our Services
    </Typography>
    <Grid container spacing={4}>
      {services.map(service => (
        <Grid item xs={12} sm={6} md={4} key={service.id}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                {service.title}
              </Typography>
              <Typography variant="body2">
                {service.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="contained" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Services;
