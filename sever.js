const http = require('http');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('All Systems Online!');
});
const port = 3000;

http.createServer(app).listen(port, () => {
  console.log(`Server running on port ${port}`);
});
