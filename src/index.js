const fs = require('fs');
// create express app
const express = require('express');
const app = express();

const users = [];

// serve static files
app.use(express.static('public'));

// use body parser
app.use(express.json());

// end point to post data
app.post('/add-user', (req, res) => {
  const username = req.body.username;
  const imageUrl = req.body.imageUrl;

  users.push({ username, imageUrl });

  res.json({ message: 'Thanks for the data' });
});

// end point to get data
app.get('/users', (req, res) => {
  res.json(users);
});

// listen for requests
const listener = app.listen(3001, () => {
  console.log('Your app is listening on port 3001');
});
