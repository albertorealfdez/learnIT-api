var express = require('express');
var app = express();

// Http access middleware
function setHeaders(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

  next();
};

module.exports = setHeaders;
