var express = require('express');
var router = express.Router();
var activities = require('../controllers/activities');

router.route('/activities')
  .get(activities.getAll)
  .post(activities.create);

router.route('/activities/:id')
  .get(activities.get)
  .put(activities.replace)
  .delete(activities.remove);

module.exports = router;
