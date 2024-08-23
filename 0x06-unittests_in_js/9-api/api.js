const express = require('express');
const app = express();
const port = 7865;

// Home endpoint
app.get('/', (req, res) => {
    res.status(200).send('Welcome to the payment system');
})

// New endpoint
app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id;

  res.send(`Payment methods for cart ${id}`);
});

app.listen(port, () => {
    console.log(`API available on localhost port ${port}`);
})

module.exports = app;
