import mongo from 'mongodb';

import StudentMap from '../models/student-map';

var controller = {
  create: create,
  get: get,
  getAll: getAll,
  remove: remove,
  replace: replace
};

function create(req, res) {
  var course = new StudentMap(req.body.course_id, req.body.competences, req.body.connections);
  var db = req.db;

  db.collection('studentmaps').insert(course, (err, result) => {
    if (err) {
      res.send({error: 'An error occurred inserting'});
    } else {
      res.send(result.ops[0]);
    }
  });
}

function replace(req, res) {
  var course = new StudentMap(req.body.course_id, req.body.competences, req.body.connections);
  var db = req.db;
  var details = { _id: new mongo.ObjectID(req.params.id) };

  db.collection('studentmaps').update(details, course, (err, result) => {
    if (err) {
      res.send({error: 'An error occurred updating'});
    } else {
      res.json(result);
    }
  });
}

function get(req, res) {
  var db = req.db;
  var details = { _id: new mongo.ObjectID(req.params.id) };

  db.collection('studentmaps').findOne(details, (err, course) => {
    if (err) {
      res.send({error: 'An error occurred getting'});
    } else {
      res.json(course);
    }
  });
}

function getAll(req, res) {
  var db = req.db;

  db.collection('studentmaps').find({}).toArray((err, studentmaps) => {
    if (err) {
      res.send({error: 'An error occurred getting'});
    } else {
      res.json(studentmaps);
    }
  });
}

function remove(req, res) {
  var db = req.db;
  var details = { _id: new mongo.ObjectID(req.params.id) };

  db.collection('studentmaps').remove(details, (err, result) => {
    if (err) {
      res.send({error: 'An error occurred deleting'});
    } else {
      res.json(result);
    }
  })
}

module.exports = controller;