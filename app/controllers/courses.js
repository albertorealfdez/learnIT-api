var ObjectID = require('mongodb').ObjectID
var Course = require('../models/course');

var controller = {
  create: create,
  get: get,
  getAll: getAll,
  remove: remove,
  update: update
};

function create(req, res) {
  var course = new Course(req.body.key, req.body.name, req.body.year);
  var db = req.db;

  db.collection('courses').insert(course, (err, result) => {
    if (err) {
      res.send({error: 'An error occurred inserting'});
    } else {
      res.send(result.ops[0]);
    }
  });
}

function update(req, res) {
  var course = new Course(req.body.key, req.body.name, req.body.year);
  var db = req.db;
  var details = { _id: new ObjectID(req.params.id) };

  db.collection('courses').update(details, course, (err, result) => {
    if (err) {
      res.send({error: 'An error occurred updating'});
    } else {
      res.json(result);
    }
  });
}

function get(req, res) {
  var db = req.db;
  var details = { _id: new ObjectID(req.params.id) };

  db.collection('courses').findOne(details, (err, course) => {
    if (err) {
      res.send({error: 'An error occurred getting'});
    } else {
      res.json(course);
    }
  });
}

function getAll(req, res) {
  var db = req.db;

  db.collection('courses').find({}).toArray((err, courses) => {
    if (err) {
      res.send({error: 'An error occurred getting'});
    } else {
      res.json(courses);
    }
  });
}

function remove(req, res) {
  var db = req.db;
  var details = { _id: new ObjectID(req.params.id) };

  db.collection('courses').remove(details, (err, result) => {
    if (err) {
      res.send({error: 'An error occurred deleting'});
    } else {
      res.json(result);
    }
  })
}

module.exports = controller;