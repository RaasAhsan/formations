"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var ValidationResult = (function () {
  function ValidationResult(results) {
    _classCallCheck(this, ValidationResult);

    this.results = results;
  }

  _createClass(ValidationResult, {
    passed: {
      value: function passed() {
        return this.fails().length === 0;
      }
    },
    fields: {
      value: function fields() {
        return this.results;
      }
    },
    successes: {
      value: function successes() {
        return this.results.filter(function (v) {
          return v.passed;
        });
      }
    },
    fails: {
      value: function fails() {
        return this.results.filter(function (v) {
          return !v.passed;
        });
      }
    },
    getErrorsFor: {
      value: function getErrorsFor(field) {
        var check = this.results.find(function (v) {
          return v.field === field;
        });
        if (check) {
          return check.passed ? [] : check.errors;
        } else {
          console.warn("A field with key `{$field}` does not exist.");
          return null;
        }
      }
    }
  });

  return ValidationResult;
})();

module.exports = ValidationResult;