import Activity from '../models/competence';

var ObjectID = require('mongodb').ObjectID

var controller = {
  create: create,
  get: get,
  getAll: getAll,
  remove: remove,
  replace: replace
};

function create(req, res) {
  var competence = new Activity(req.body.key, req.body.title, req.body.abstract, req.body.competences, req.body.difficulty);
  var db = req.db;

  db.collection('activities').insert(competence, (err, result) => {
    if (err) {
      res.send({error: 'An error occurred inserting'});
    } else {
      res.send(result.ops[0]);
    }
  });
}

function replace(req, res) {
  var competence = new Activity(req.body.key, req.body.title, req.body.abstract, req.body.competences, req.body.difficulty);
  var db = req.db;
  var details = { _id: new ObjectID(req.params.id) };

  db.collection('activities').update(details, competence, (err, result) => {
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

  db.collection('activities').findOne(details, (err, competence) => {
    if (err) {
      res.send({error: 'An error occurred getting'});
    } else {
      res.json(competence);
    }
  });
}

function getByCourse(req, res) {
  var db = req.db;
  var details = { course_id: req.query.course };
  
  db.collection('activities').find(details).toArray((err, competence) => {
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

  db.collection('activities').find({}).toArray((err, activities) => {
    if (err) {
      res.send({error: 'An error occurred getting'});
    } else {
      res.json(activities);
    }
  });
}

function remove(req, res) {
  var db = req.db;
  var details = { _id: new ObjectID(req.params.id) };

  db.collection('activities').remove(details, (err, result) => {
    if (err) {
      res.send({error: 'An error occurred deleting'});
    } else {
      res.json(result);
    }
  })
}

module.exports = controller;