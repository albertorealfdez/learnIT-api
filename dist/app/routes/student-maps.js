'use strict';

var express = require('express');
var router = express.Router();
var studentMaps = require('../controllers/student-maps');

router.route('/studentmaps').get(studentMaps.getAll).post(studentMaps.create);

router.route('/studentmaps/:id').get(studentMaps.get).put(studentMaps.update).delete(studentMaps.remove);

module.exports = router;