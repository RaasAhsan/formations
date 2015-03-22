"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var BaseValidation = _interopRequire(require("./BaseValidation"));

var BooleanValidation = (function (_BaseValidation) {
  function BooleanValidation(constraints) {
    _classCallCheck(this, BooleanValidation);

    this.constraints = constraints;
  }

  _inherits(BooleanValidation, _BaseValidation);

  _createClass(BooleanValidation, {
    equals: {
      value: function equals(another, error) {
        return new BooleanValidation(this.constraints.concat(this.createConstraint(function (i) {
          return i === another;
        }, error || "Input must be equal to '" + another + "'.")));
      }
    },
    test: {
      value: function test(input) {
        var boolean = BooleanValidation.checkBoolean(input);
        if (boolean) {
          var errors = this.constraints.map(function (c) {
            var result = c.constraint(boolean);
            return [result, result ? null : c.error];
          }).filter(function (t) {
            return !t[0];
          }).map(function (c) {
            return c[1];
          });

          return errors;
        } else {
          return ["Input is not a boolean."];
        }
      }
    }
  }, {
    checkBoolean: {
      value: function checkBoolean(input) {
        if (typeof input === "boolean") {
          return input;
        } else if (input === "true") {
          return true;
        } else if (input === "false") {
          return false;
        } else {
          return null;
        }
      }
    }
  });

  return BooleanValidation;
})(BaseValidation);

module.exports = BooleanValidation;