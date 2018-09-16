import express from 'express';

import users from '../controllers/users';

const router = express.Router();

router.route('/users')
  .get(users.getAll)
  .post(users.create);

router.route('/users/:id')
  .get(users.get)
  .put(users.replace)
  .delete(users.remove);

router.route('/users/:id/courses')
  .get(users.getUserCourses)

export default router;