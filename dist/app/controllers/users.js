'use strict';

var ObjectID = require('mongodb').ObjectID;
var User = require('../models/user');

var controller = {
  create: create,
  get: get,
  getAll: getAll,
  getUserCourses: getUserCourses,
  remove: remove,
  update: update
};

function create(req, res) {
  var user = new User(req.body.name, req.body.email, req.body.password);
  var db = req.db;

  db.collection('users').insert(user, function (err, result) {
    if (err) {
      res.send({ error: 'An error occurred inserting' });
    } else {
      res.send(result.ops[0]);
    }
  });
}

function update(req, res) {
  var user = new User(req.body.name, req.body.email, req.body.password);
  var db = req.db;
  var details = { _id: new ObjectID(req.params.id) };

  db.collection('users').update(details, user, function (err, result) {
    if (err) {
      res.send({ error: 'An error occurred updating' });
    } else {
      res.json(result);
    }
  });
}

function get(req, res) {
  var db = req.db;
  var details = { _id: new ObjectID(req.params.id) };

  db.collection('users').findOne(details, function (err, user) {
    if (err) {
      res.send({ error: 'An error occurred getting' });
    } else {
      res.json(user);
    }
  });
}

function getByEmail(req, res) {
  var db = req.db;
  var details = { email: req.query.email };

  db.collection('users').findOne(details, function (err, user) {
    if (err) {
      res.send({ error: 'An error occurred getting' });
    } else {
      res.json(user);
    }
  });
}

function getAll(req, res) {
  var db = req.db;
  if (req.query.email) {
    return getByEmail(req, res);
  }

  db.collection('users').find({}).toArray(function (err, users) {
    if (err) {
      res.send({ error: 'An error occurred getting' });
    } else {
      res.json(users);
    }
  });
}

function getUserCourses(req, res) {
  var db = req.db;
  var details = { _id: new ObjectID(req.params.id) };

  db.collection('users').findOne(details, function (err, user) {
    if (err) {
      res.send({ error: 'An error occurred getting' });
    } else {
      res.json(user.courses);
    }
  });
}

function remove(req, res) {
  var db = req.db;
  var details = { _id: new ObjectID(req.params.id) };

  db.collection('users').remove(details, function (err, result) {
    if (err) {
      res.send({ error: 'An error occurred deleting' });
    } else {
      res.json(result);
    }
  });
}

module.exports = controller;