var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('./config/db');
var port = process.env.PORT || 3000;
var User = require('./app/models/user');

var MongoClient = require('mongodb').MongoClient;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


MongoClient.connect(db.url, (err, database) => {
  if (err) {
    return console.log(err);
  }
  app.use(function(req, res, next) {
    req.db = database;
    next();
  });
  var routes = require('./app/routes');
  
  app.use('/', routes);

  app.listen(port, () => {
    console.log('API server started on: ' + port);
  });
});