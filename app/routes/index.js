var express = require('express');
var router = express.Router();
var users = require('./users');

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

router.use('/api', users);

module.exports = router;