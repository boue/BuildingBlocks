//app is encapsulated in a node module
var express = require('express');
var app = express();

app.get('/', function(request, response){
  response.send('OK');
});

module.exports = app;