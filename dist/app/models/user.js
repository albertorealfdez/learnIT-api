"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = exports.User = function User(name, email, password, courses) {
  _classCallCheck(this, User);

  this.name = name;
  this.email = email;
  this.password = password;
  this.courses = courses;
};