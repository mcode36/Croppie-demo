'use strict';

const express     = require('express');
const bodyParser  = require('body-parser');
const PORT = 3000;

var app = express();

// Reserved for later use
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Routes
app.route('/')
  .get(function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
  });

// Static folder
app.use('/public', express.static(process.cwd() + '/public'));

// 404 Not Found Middleware
app.use(function(req, res, next) {
  res.status(404)
    .type('text')
    .send('Not Found');
});

// Start server
app.listen(PORT, function () {
  console.log("Listening on port " + PORT);
});

