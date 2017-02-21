//app is encapsulated in a node module
var express = require('express');
var app = express();

//app.use to mount middleware
app.use(express.static('public'));

app.get('/cities', function(request, response){
  //send when passed a string returns html by default
  //array or object by default returns json
  var cities = ['Lotopia', 'Caspiana', 'Indigo'];
  response.json(cities);
});

module.exports = app;