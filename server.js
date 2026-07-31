const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Simple page that calls Flask API
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Proxy endpoint (optional)
app.get('/api/from-flask', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:5000/api/hello');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Cannot reach Flask backend' });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Express frontend running on port ${PORT}`);
});