module.exports = function (app) {
  var users = require('../controllers/users');

  app.route('/users')
    .get(users.getAll)
    .post(users.create);

  /*app.route('/users/:userId')
    .get(users.getById)
    .post(users.update)
    .delete(users.delete);*/
};