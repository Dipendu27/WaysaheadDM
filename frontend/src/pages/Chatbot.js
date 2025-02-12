// src/pages/Chatbot.js
import React, { useState } from 'react';
import axios from 'axios';
import { Container, Typography, TextField, Button, Box, Paper } from '@mui/material';

const Chatbot = () => {
  const [userMessage, setUserMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const token = localStorage.getItem('token');

  const handleSend = async () => {
    if (!userMessage.trim()) return;
    const newEntry = { sender: 'user', text: userMessage };
    setChatHistory(prev => [...prev, newEntry]);
    
    try {
      const response = await axios.post('http://localhost:5000/api/chatbot',
        { message: userMessage },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setChatHistory(prev => [...prev, { sender: 'bot', text: response.data.reply }]);
    } catch (err) {
      setChatHistory(prev => [...prev, { sender: 'bot', text: 'Sorry, there was an error.' }]);
    }
    setUserMessage('');
  };

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Chat with Our Bot
      </Typography>
      {!token && (
        <Typography variant="body1" color="error" align="center">
          Please log in to access the chatbot.
        </Typography>
      )}
      <Paper sx={{ p: 2, height: 300, overflowY: 'auto', mb: 2 }}>
        {chatHistory.map((entry, idx) => (
          <Box key={idx} sx={{ mb: 1 }}>
            <Typography variant="subtitle1" color={entry.sender === 'bot' ? 'primary' : 'textSecondary'}>
              {entry.sender === 'bot' ? 'Bot:' : 'You:'}
            </Typography>
            <Typography variant="body1">{entry.text}</Typography>
          </Box>
        ))}
      </Paper>
      <Box sx={{ display: 'flex' }}>
        <TextField 
          fullWidth 
          label="Type your message..." 
          value={userMessage} 
          onChange={e => setUserMessage(e.target.value)} 
        />
        <Button variant="contained" color="primary" onClick={handleSend} sx={{ ml: 2 }}>
          Send
        </Button>
      </Box>
    </Container>
  );
};

export default Chatbot;
