'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Student = undefined;

var _user = require('./user');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Student = exports.Student = function (_User) {
  _inherits(Student, _User);

  function Student(name, email, password, courses, activities, maps) {
    _classCallCheck(this, Student);

    var _this = _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).call(this, name, email, password, courses));

    _this.activities = activities;
    _this.maps = maps;
    return _this;
  }

  return Student;
}(_user.User);