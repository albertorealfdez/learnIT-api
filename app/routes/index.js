var express = require('express');
var router = express.Router();
var users = require('./users');
var courses = require('./courses');
var competences = require('./competences');

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

router.use('/api', users);
router.use('/api', courses);
router.use('/api', competences);

module.exports = router;