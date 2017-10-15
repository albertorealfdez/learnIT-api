var express = require('express');
var router = express.Router();
var users = require('./users');
var courses = require('./courses');

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

router.use('/api', users);
router.use('/api', courses);

module.exports = router;