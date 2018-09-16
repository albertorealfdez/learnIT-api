import express from 'express';

import students from '../controllers/students';

const router = express.Router();

router.route('/students')
  .get(students.getAll)
  .post(students.create);

router.route('/students/:id')
  .get(students.get)
  .put(students.replace)
  .patch(students.update)
  .delete(students.remove);

router.route('/students/:id/courses')
  .get(students.getStudentCourses)

module.exports = router;