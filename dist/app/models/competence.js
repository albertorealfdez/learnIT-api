"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Competence = exports.Competence = function Competence(key, title, minThreshold, maxThreshold) {
  _classCallCheck(this, Competence);

  this.key = key;
  this.title = title;
  this.minThreshold = minThreshold;
  this.maxThreshold = maxThreshold;
};