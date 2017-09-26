var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  type: {
    type: Number
  }
});

module.exports = mongoose.model('Users', UserSchema);