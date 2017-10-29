'use strict';

var ObjectID = require('mongodb').ObjectID;
var StudentCompetence = require('../models/studentCompetence');

var controller = {
  create: create,
  get: get,
  getAll: getAll,
  remove: remove,
  update: update
};

function create(req, res) {
  var competence = new StudentCompetence(req.body.key, req.body.title, req.body.minThreshold, req.body.maxThreshold);
  var db = req.db;

  db.collection('studentcompetences').insert(competence, function (err, result) {
    if (err) {
      res.send({ error: 'An error occurred inserting' });
    } else {
      res.send(result.ops[0]);
    }
  });
}

function update(req, res) {
  var competence = new StudentCompetence(req.body.key, req.body.title, req.body.minThreshold, req.body.maxThreshold);
  var db = req.db;
  var details = { _id: new ObjectID(req.params.id) };

  db.collection('studentcompetences').update(details, competence, function (err, result) {
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

  db.collection('studentcompetences').findOne(details, function (err, competence) {
    if (err) {
      res.send({ error: 'An error occurred getting' });
    } else {
      res.json(competence);
    }
  });
}

function getByCourse(req, res) {
  var db = req.db;
  var details = { course_id: new ObjectID(req.query.course) };

  db.collection('studentcompetences').findOne(details, function (err, competence) {
    if (err) {
      res.send({ error: 'An error occurred getting' });
    } else {
      res.json(competence);
    }
  });
}

function getAll(req, res) {
  var db = req.db;
  if (req.query.course) {
    return getByCourse(req, res);
  }

  db.collection('studentcompetences').find({}).toArray(function (err, studentcompetences) {
    if (err) {
      res.send({ error: 'An error occurred getting' });
    } else {
      res.json(studentcompetences);
    }
  });
}

function remove(req, res) {
  var db = req.db;
  var details = { _id: new ObjectID(req.params.id) };

  db.collection('studentcompetences').remove(details, function (err, result) {
    if (err) {
      res.send({ error: 'An error occurred deleting' });
    } else {
      res.json(result);
    }
  });
}

module.exports = controller;