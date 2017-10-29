var express = require('express');
var router = express.Router();
var students = require('../controllers/students');

router.route('/students')
  .get(students.getAll)
  .post(students.create);

router.route('/students/:id')
  .get(students.get)
  .put(students.update)
  .delete(students.remove);

router.route('/students/:id/courses')
  .get(students.getStudentCourses)

module.exports = router;