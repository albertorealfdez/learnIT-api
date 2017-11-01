'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StudentCompetence = undefined;

var _competence = require('./competence');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StudentCompetence = exports.StudentCompetence = function (_Competence) {
  _inherits(StudentCompetence, _Competence);

  function StudentCompetence(key, title, minThreshold, maxThreshold, force, completed, locked) {
    _classCallCheck(this, StudentCompetence);

    var _this = _possibleConstructorReturn(this, (StudentCompetence.__proto__ || Object.getPrototypeOf(StudentCompetence)).call(this, key, title, minThreshold, maxThreshold));

    _this.force = force;
    _this.completed = completed;
    _this.locked = locked;
    return _this;
  }

  return StudentCompetence;
}(_competence.Competence);