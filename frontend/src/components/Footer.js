// src/components/Footer.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => (
  <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 2, mt: 4, textAlign: 'center' }}>
    <Typography variant="body2">&copy; 2025 WaysAhead Global. All rights reserved.</Typography>
  </Box>
);

export default Footer;
