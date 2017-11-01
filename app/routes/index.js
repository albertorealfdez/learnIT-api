var express = require('express');
var router = express.Router();
var users = require('./users');
var students = require('./students');
var studentMaps = require('./student-maps');
var courses = require('./courses');
var competences = require('./competences');
var studentCompetences = require('./student-competences');
var activities = require('./activities');

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

router.use('/api', users);
router.use('/api', students);
router.use('/api', studentMaps);
router.use('/api', courses);
router.use('/api', competences);
router.use('/api', studentCompetences);
router.use('/api', activities);

module.exports = router;
