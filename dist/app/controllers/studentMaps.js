'use strict';

var ObjectID = require('mongodb').ObjectID;
var StudentMap = require('../models/studentMap');

var controller = {
  create: create,
  get: get,
  getAll: getAll,
  remove: remove,
  update: update
};

function create(req, res) {
  var course = new StudentMap(req.body.course_id, req.body.competences);
  var db = req.db;

  db.collection('studentmaps').insert(course, function (err, result) {
    if (err) {
      res.send({ error: 'An error occurred inserting' });
    } else {
      res.send(result.ops[0]);
    }
  });
}

function update(req, res) {
  var course = new StudentMap(req.body.course_id, req.body.competences);
  var db = req.db;
  var details = { _id: new ObjectID(req.params.id) };

  db.collection('studentmaps').update(details, course, function (err, result) {
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

  db.collection('studentmaps').findOne(details, function (err, course) {
    if (err) {
      res.send({ error: 'An error occurred getting' });
    } else {
      res.json(course);
    }
  });
}

function getAll(req, res) {
  var db = req.db;

  db.collection('studentmaps').find({}).toArray(function (err, studentmaps) {
    if (err) {
      res.send({ error: 'An error occurred getting' });
    } else {
      res.json(studentmaps);
    }
  });
}

function remove(req, res) {
  var db = req.db;
  var details = { _id: new ObjectID(req.params.id) };

  db.collection('studentmaps').remove(details, function (err, result) {
    if (err) {
      res.send({ error: 'An error occurred deleting' });
    } else {
      res.json(result);
    }
  });
}

module.exports = controller;