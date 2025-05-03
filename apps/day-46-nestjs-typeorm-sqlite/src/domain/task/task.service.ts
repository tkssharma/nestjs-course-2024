const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// GET route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// POST route
app.post('/api/data', (req, res) => {
  const { name } = req.body;
  res.json({ message: `Hello, ${name}!` });
});

// Route with params
app.get('/api/user/:id', (req, res) => {
  const userId = req.params.id;
  res.json({ userId });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
