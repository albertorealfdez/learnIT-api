import Competence from '../models/competence';

var ObjectID = require('mongodb').ObjectID

var controller = {
  create: create,
  get: get,
  getAll: getAll,
  remove: remove,
  update: update
};

function create(req, res) {
  var competence = new Competence(req.body.key, req.body.title, req.body.minThreshold, req.body.maxThreshold);
  var db = req.db;

  db.collection('competences').insert(competence, (err, result) => {
    if (err) {
      res.send({error: 'An error occurred inserting'});
    } else {
      res.send(result.ops[0]);
    }
  });
}

function update(req, res) {
  var competence = new Competence(req.body.key, req.body.title, req.body.minThreshold, req.body.maxThreshold);
  var db = req.db;
  var details = { _id: new ObjectID(req.params.id) };

  db.collection('competences').update(details, competence, (err, result) => {
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

  db.collection('competences').findOne(details, (err, competence) => {
    if (err) {
      res.send({error: 'An error occurred getting'});
    } else {
      res.json(competence);
    }
  });
}

function getByCourse(req, res) {
  var db = req.db;
  var details = { course_id: new ObjectID(req.query.course) };
  
  db.collection('competences').findOne(details, (err, competence) => {
    if (err) {
      res.send({error: 'An error occurred getting'});
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

  db.collection('competences').find({}).toArray((err, competences) => {
    if (err) {
      res.send({error: 'An error occurred getting'});
    } else {
      res.json(competences);
    }
  });
}

function remove(req, res) {
  var db = req.db;
  var details = { _id: new ObjectID(req.params.id) };

  db.collection('competences').remove(details, (err, result) => {
    if (err) {
      res.send({error: 'An error occurred deleting'});
    } else {
      res.json(result);
    }
  })
}

module.exports = controller;