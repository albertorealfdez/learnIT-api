require('babel-register');  
require('dotenv').config();

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import MongoClient from 'mongodb';

let app = express();

var port = process.env.PORT || 3000;
var dbUrl = process.env.DB_URL_DEV;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

MongoClient.connect(dbUrl, (err, database) => {
  if (err) {
    return console.log(err);
  }
  // Database setting middleware
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
