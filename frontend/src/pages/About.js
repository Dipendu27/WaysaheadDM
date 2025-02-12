// src/pages/About.js
import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';

const About = () => (
  <Container sx={{ py: 4 }}>
    <Typography variant="h4" align="center" gutterBottom>
      About WaysAhead Global
    </Typography>
    <Typography variant="body1" paragraph>
      WaysAhead Global is a digital transformation company leveraging AI and data analytics to revolutionize business operations worldwide.
    </Typography>
    <Typography variant="h5" gutterBottom>
      Our Mission
    </Typography>
    <Typography variant="body1" paragraph>
      Democratize AI & BI and empower businesses to make data-driven decisions.
    </Typography>
    <Typography variant="h5" gutterBottom>
      Global Presence
    </Typography>
    <Grid container spacing={2}>
      {['Singapore', 'Dubai, UAE', 'New Delhi, India', 'London, UK', 'New York, USA'].map((location, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardContent>
              <Typography variant="h6" align="center">{location}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default About;
