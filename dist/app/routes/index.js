'use strict';

var express = require('express');
var router = express.Router();
var users = require('./users');
var students = require('./students');
var studentMaps = require('./studentMaps');
var courses = require('./courses');
var competences = require('./competences');
var studentCompetences = require('./studentCompetences');

router.get('/', function (req, res) {
  res.status(200).json({ message: 'Connected!' });
});

router.use('/api', users);
router.use('/api', students);
router.use('/api', studentMaps);
router.use('/api', courses);
router.use('/api', competences);
router.use('/api', studentCompetences);

module.exports = router;