'use strict';

require('babel-register');
require('dotenv').config();
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;
var dbUrl = process.env.DB_URL;

var MongoClient = require('mongodb').MongoClient;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var headers = require('./middlewares/headers');
app.use(headers);

MongoClient.connect(dbUrl, function (err, database) {
  if (err) {
    return console.log(err);
  }
  // Database setting middleware
  app.use(function (req, res, next) {
    req.db = database;
    next();
  });

  var routes = require('./app/routes');

  app.use('/', routes);

  app.listen(port, function () {
    console.log('API server started on: ' + port);
  });
});