"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StudentMap = exports.StudentMap = function StudentMap(courseId, competences) {
  _classCallCheck(this, StudentMap);

  this.courseId = courseId;
  this.competences = competences;
};