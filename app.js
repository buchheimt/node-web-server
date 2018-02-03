const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Error handling request'
  });
});

app.listen(3000);