'use strict';

var express = require('express');
var router = express.Router();
var competences = require('../controllers/competences');

router.route('/competences').get(competences.getAll).post(competences.create);

router.route('/competences/:id').get(competences.get).put(competences.update).delete(competences.remove);

module.exports = router;