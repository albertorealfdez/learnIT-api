var express = require('express');
var router = express.Router();
var users = require('../controllers/users');

router.route('/users')
  .get(users.getAll)
  .post(users.create);

router.route('/users/:id')
  .get(users.get)
  .put(users.update)
  .delete(users.remove);

module.exports = router;