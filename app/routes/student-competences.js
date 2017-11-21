var express = require('express');
var router = express.Router();
var studentCompetences = require('../controllers/student-competences');

router.route('/studentcompetences')
  .get(studentCompetences.getAll)
  .post(studentCompetences.create);

router.route('/studentcompetences/:id')
  .get(studentCompetences.get)
  .put(studentCompetences.replace)
  .delete(studentCompetences.remove);

module.exports = router;
