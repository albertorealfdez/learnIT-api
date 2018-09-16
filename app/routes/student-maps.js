import express from 'express';

import studentMaps from '../controllers/student-maps';

const router = express.Router();

router.route('/studentmaps')
  .get(studentMaps.getAll)
  .post(studentMaps.create);

router.route('/studentmaps/:id')
  .get(studentMaps.get)
  .put(studentMaps.replace)
  .delete(studentMaps.remove);

  export default router;