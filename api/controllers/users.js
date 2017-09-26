var mongoose = require('mongoose');
var User = mongoose.model('Users');

exports.getAll = function(req, res) {
  User.find({}, function(err, users) {
    if (err) {
      res.send(err);
    }
    res.json(users);
  });
};

exports.create = function(req, res) {
  var newUser = new User(req.body);

  newUser.save(function(err, user) {
    if (err) {
      res.send(err);
    }
    res.json(user);
  });
};