// backend/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Demo user credentials (replace with real user system in production)
const demoUser = { username: 'admin', password: 'password' };

// JWT authentication middleware
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // "Bearer TOKEN"
  if (!token) return res.status(401).json({ message: 'Token missing' });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Token invalid' });
    req.user = user;
    next();
  });
}

// Login endpoint
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (username === demoUser.username && password === demoUser.password) {
    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return res.json({ token });
  }
  res.status(401).json({ message: 'Invalid credentials' });
});

// Protected news endpoint
app.get('/api/news', authenticateToken, (req, res) => {
  // In a real app, query the News collection
  const newsFeed = [
    { id: 1, title: "New AI Shop Assist Launched", date: "2025-02-10", excerpt: "Our latest AI-driven retail assistant transforms in-store experiences." },
    { id: 2, title: "Geo-Spatial Analytics Breakthrough", date: "2025-02-08", excerpt: "Deep location-based insights now available." },
    { id: 3, title: "In-Store Analytics Update", date: "2025-02-05", excerpt: "Real-time analytics to boost customer engagement." }
  ];
  res.json(newsFeed);
});

// Chatbot endpoint using OpenAI API
const configuration = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const openai = new OpenAIApi(configuration);

app.post('/api/chatbot', authenticateToken, async (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).json({ message: 'No message provided' });
  
  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `You are WaysAhead Global's chatbot. Answer the query in a friendly, professional tone:\n\n${message}`,
      max_tokens: 150,
    });
    res.json({ reply: completion.data.choices[0].text.trim() });
  } catch (err) {
    console.error('OpenAI API error:', err);
    res.status(500).json({ message: 'Chatbot error' });
  }
});

// Default route
app.get('/', (req, res) => {
  res.send('WaysAhead Global API is running.');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend server running on port ${PORT}`));
