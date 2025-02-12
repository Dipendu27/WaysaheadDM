// src/pages/News.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Grid, Card, CardContent, CardActions, Button } from '@mui/material';

const News = () => {
  const [newsFeed, setNewsFeed] = useState([]);
  const [error, setError] = useState('');
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      setError('Please log in to view news.');
      return;
    }
    axios.get('http://localhost:5000/api/news', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => setNewsFeed(res.data))
      .catch(err => setError('Failed to load news.'));
  }, [token]);

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Latest News
      </Typography>
      {error && <Typography variant="body1" color="error" align="center">{error}</Typography>}
      <Grid container spacing={4}>
        {newsFeed.map(article => (
          <Grid item xs={12} sm={6} md={4} key={article.id}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {article.title}
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  {article.date}
                </Typography>
                <Typography variant="body2">
                  {article.excerpt}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="contained" color="primary">
                  Read More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default News;
