const express = require('express');
const app = express();
const port = 80;

app.use(express.static(__dirname)); // Serve static files (like index.html)

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, '0.0.0.0', () => {
console.log(`Server running at http://localhost:${port}`);
});
