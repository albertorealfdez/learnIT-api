var express = require('express');
var router = express.Router();
var users = require('../controllers/users');

router.route('/users')
  .get(users.getAll)
  .post(users.create);

module.exports = router;