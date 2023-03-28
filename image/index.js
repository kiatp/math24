const express = require('express');
const app = express();

// Define a route that generates a random number
app.get('/index', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100);
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  const num3 = Math.floor(Math.random() * 10) + 1;
  const num4 = Math.floor(Math.random() * 10) + 1;
  res.send(`Random number: ${num1} ${num2} ${num3} ${num4}`);
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});