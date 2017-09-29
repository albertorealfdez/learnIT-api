exports.getAll = function(req, res) {
  var db = req.db;
  
  db.collection('users').find().toArray(function(err, users) {
    if (err) {
      res.send({error: 'An error occurred getting'});
    } else {
      console.log(users);
      res.json(users);
    }
  });
};

exports.create = function(req, res) {
  var user = { name: req.body.name, email: req.body.email };
  var db = req.db;

  db.collection('users').insert(user, (err, result) => {
    if (err) {
      res.send({error: 'An error occurred inserting'});
    } else {
      res.send(result.ops[0]);
    }
  });
};
