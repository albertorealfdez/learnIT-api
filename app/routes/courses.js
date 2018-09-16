import express from 'express';

import courses from '../controllers/courses';

const router = express.Router();

router.route('/courses')
  .get(courses.getAll)
  .post(courses.create);

router.route('/courses/:id')
  .get(courses.get)
  .put(courses.replace)
  .delete(courses.remove);

module.exports = router;