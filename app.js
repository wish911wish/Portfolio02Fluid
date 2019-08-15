var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send({
    "Output": "Hello SAAAM GET World!"
  });
});

app.post('/', function(req, res) {
  res.send({
    "Output": "Hello SAAAM POST World!"
  });
});


// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
