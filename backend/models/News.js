// backend/models/News.js
const mongoose = require('mongoose');

const NewsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, default: Date.now },
  excerpt: String,
  content: String
});

module.exports = mongoose.model('News', NewsSchema);
