const express = require('express');

const app = express();
const PORT = 3000;

app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

app.get('/healthcheck', (req, res) => {
  res.json({ message: 'healthy' });
});

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

app.get('/hello', (req, res) => {
  res.json({ message: 'World' });
});

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});