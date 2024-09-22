const express = require('express');

const app = express();
const PORT = 3000;

app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

app.get('/healthcheck', (req, res) => {
  res.json({ message: 'healthy' });
});

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});