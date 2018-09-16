import express from 'express';

import competences from '../controllers/competences';

const router = express.Router();

router.route('/competences')
  .get(competences.getAll)
  .post(competences.create);

router.route('/competences/:id')
  .get(competences.get)
  .put(competences.replace)
  .delete(competences.remove);

module.exports = router;
