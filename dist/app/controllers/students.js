'use strict';

var ObjectID = require('mongodb').ObjectID;
var Student = require('../models/student');

var controller = {
  create: create,
  get: get,
  getAll: getAll,
  getStudentCourses: getStudentCourses,
  remove: remove,
  update: update
};

function create(req, res) {
  var user = new Student(req.body.name, req.body.email, req.body.password);
  var db = req.db;

  db.collection('students').insert(user, function (err, result) {
    if (err) {
      res.send({ error: 'An error occurred inserting' });
    } else {
      res.send(result.ops[0]);
    }
  });
}

function update(req, res) {
  var user = new Student(req.body.name, req.body.email, req.body.password);
  var db = req.db;
  var details = { _id: new ObjectID(req.params.id) };

  db.collection('students').update(details, user, function (err, result) {
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

  db.collection('students').findOne(details, function (err, user) {
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

  db.collection('students').findOne(details, function (err, user) {
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

  db.collection('students').find({}).toArray(function (err, students) {
    if (err) {
      res.send({ error: 'An error occurred getting' });
    } else {
      res.json(students);
    }
  });
}

function getStudentCourses(req, res) {
  var db = req.db;
  var details = { _id: new ObjectID(req.params.id) };

  db.collection('students').findOne(details, function (err, user) {
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

  db.collection('students').remove(details, function (err, result) {
    if (err) {
      res.send({ error: 'An error occurred deleting' });
    } else {
      res.json(result);
    }
  });
}

module.exports = controller;