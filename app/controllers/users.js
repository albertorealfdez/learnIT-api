import mongo from 'mongodb';

import User from '../models/user';

var controller = {
  create: create,
  get: get,
  getAll: getAll,
  getUserCourses: getUserCourses,
  remove: remove,
  replace: replace
};

function create(req, res) {
  var user = new User(req.body.name, req.body.email, req.body.password);
  var db = req.db;

  db.collection('users').insert(user, (err, result) => {
    if (err) {
      res.send({error: 'An error occurred inserting'});
    } else {
      res.send(result.ops[0]);
    }
  });
}

function replace(req, res) {
  var user = new User(req.body.name, req.body.email, req.body.password);
  var db = req.db;
  var details = { _id: new mongo.ObjectID(req.params.id) };

  db.collection('users').update(details, user, (err, result) => {
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

  db.collection('users').findOne(details, (err, user) => {
    if (err) {
      res.send({error: 'An error occurred getting'});
    } else {
      res.json(user);
    }
  });
}

function getByEmail(req, res) {
  var db = req.db;
  var details = { email: req.query.email };
  
  db.collection('users').findOne(details, (err, user) => {
    if (err) {
      res.send({error: 'An error occurred getting'});
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

  db.collection('users').find({}).toArray((err, users) => {
    if (err) {
      res.send({error: 'An error occurred getting'});
    } else {
      res.json(users);
    }
  });
}

function getUserCourses(req, res) {
  var db = req.db;
  var details = { _id: new mongo.ObjectID(req.params.id) };

  db.collection('users').findOne(details, (err, user) => {
    if (err) {
      res.send({error: 'An error occurred getting'});
    } else {
      res.json(user.courses);
    }
  });
}

function remove(req, res) {
  var db = req.db;
  var details = { _id: new mongo.ObjectID(req.params.id) };

  db.collection('users').remove(details, (err, result) => {
    if (err) {
      res.send({error: 'An error occurred deleting'});
    } else {
      res.json(result);
    }
  })
}

module.exports = controller;