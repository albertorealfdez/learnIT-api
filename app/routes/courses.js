var express = require('express');
var router = express.Router();
var courses = require('../controllers/courses');

router.route('/courses')
  .get(courses.getAll)
  .post(courses.create);

router.route('/courses/:id')
  .get(courses.get)
  .put(courses.replace)
  .delete(courses.remove);

module.exports = router;