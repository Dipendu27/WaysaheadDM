// src/pages/Careers.js
import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardActions, Button } from '@mui/material';

const Careers = () => (
  <Container sx={{ py: 4 }}>
    <Typography variant="h4" align="center" gutterBottom>
      Careers
    </Typography>
    <Typography variant="body1" align="center" gutterBottom>
      Join our team and be part of the digital transformation.
    </Typography>
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardContent>
            <Typography variant="h5">Data Analyst Intern</Typography>
            <Typography variant="body2" color="text.secondary">
              Internship - Remote
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant="contained" color="secondary">
              Apply Now
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardContent>
            <Typography variant="h5">Senior AI Engineer</Typography>
            <Typography variant="body2" color="text.secondary">
              Full-Time - London, UK
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant="contained" color="secondary">
              Apply Now
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  </Container>
);

export default Careers;
