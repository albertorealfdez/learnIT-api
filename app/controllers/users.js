var controller = {
  create: create,
  getAll: getAll
};

function create(req, res) {
  var user = { name: req.body.name, email: req.body.email, password: req.body.password };
  var db = req.db;

  db.collection('users').insert(user, (err, result) => {
    if (err) {
      res.send({error: 'An error occurred inserting'});
    } else {
      res.send(result.ops[0]);
    }
  });
}

function getAll(req, res) {
  var db = req.db;
  if (req.query.email) {
    return getByEmail(req, res);
  }  
  db.collection('users').find().toArray((err, users) => {
    if (err) {
      res.send({error: 'An error occurred getting'});
    } else {
      res.json(users);
    }
  });
}

function getByEmail(req, res) {
  var db = req.db;
  var details = { email: req.query.email };
  console.log('HERE:', details);
  db.collection('users').findOne(details, (err, user) => {
    if (err) {
      res.send({error: 'An error occurred getting'});
    } else {
      res.json(user);
    }
  });
}

module.exports = controller;