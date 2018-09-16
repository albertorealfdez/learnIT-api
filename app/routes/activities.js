import express from 'express';

import activities from '../controllers/activities';

const router = express.Router();

router.route('/activities')
  .get(activities.getAll)
  .post(activities.create);

router.route('/activities/:id')
  .get(activities.get)
  .put(activities.replace)
  .delete(activities.remove);

export default router;;
