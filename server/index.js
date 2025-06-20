const express = require('express');
const app = express();

// Required: use environment port
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send("Hello from the server!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
