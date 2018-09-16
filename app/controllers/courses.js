import mongo from 'mongodb';

import Course from '../models/course';

let controller = {
  create: create,
  get: get,
  getAll: getAll,
  remove: remove,
  replace: replace
};

function create(req, res) {
  let course = new Course(req.body.key, req.body.name, req.body.year);
  let db = req.db;

  db.collection('courses').insert(course, (err, result) => {
    if (err) {
      res.send({error: 'An error occurred inserting'});
    } else {
      res.send(result.ops[0]);
    }
  });
}

function replace(req, res) {
  let course = new Course(req.body.key, req.body.name, req.body.year);
  let db = req.db;
  let details = { _id: new mongo.ObjectID(req.params.id) };

  db.collection('courses').update(details, course, (err, result) => {
    if (err) {
      res.send({error: 'An error occurred updating'});
    } else {
      res.json(result);
    }
  });
}

function get(req, res) {
  let db = req.db;
  let details = { _id: new mongo.ObjectID(req.params.id) };

  db.collection('courses').findOne(details, (err, course) => {
    if (err) {
      res.send({error: 'An error occurred getting'});
    } else {
      res.json(course);
    }
  });
}

function getAll(req, res) {
  let db = req.db;

  if (req.query.key) {
    return getByKey(req, res);
  }

  db.collection('courses').find({}).toArray((err, courses) => {
    if (err) {
      res.send({error: 'An error occurred getting'});
    } else {
      res.json(courses);
    }
  });
}

function getByKey(req, res) {
  let db = req.db;

  let details = { key: req.query.key };

  db.collection('courses').findOne(details, (err, course) => {
    if (err) {
      res.send({error: 'An error occurred getting'});
    } else {
      res.json(course);
    }
  });
} 

function remove(req, res) {
  let db = req.db;
  let details = { _id: new mongo.ObjectID(req.params.id) };

  db.collection('courses').remove(details, (err, result) => {
    if (err) {
      res.send({error: 'An error occurred deleting'});
    } else {
      res.json(result);
    }
  })
}

module.exports = controller;