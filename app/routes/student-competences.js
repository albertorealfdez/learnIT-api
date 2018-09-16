import express from 'express';

import studentCompetences from '../controllers/student-competences';

const router = express.Router();

router.route('/studentcompetences')
  .get(studentCompetences.getAll)
  .post(studentCompetences.create);

router.route('/studentcompetences/:id')
  .get(studentCompetences.get)
  .put(studentCompetences.replace)
  .delete(studentCompetences.remove);

export default router;;
