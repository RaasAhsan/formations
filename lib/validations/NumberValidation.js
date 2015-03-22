"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var BaseValidation = _interopRequire(require("./BaseValidation"));

var NumberValidation = (function (_BaseValidation) {
  function NumberValidation(constraints) {
    _classCallCheck(this, NumberValidation);

    this.constraints = constraints;
  }

  _inherits(NumberValidation, _BaseValidation);

  _createClass(NumberValidation, {
    bounds: {
      value: function bounds(minimum, maximum, error) {
        return this.passes(function (i) {
          return i >= minimum && i <= maximum;
        }, error || "Input must be greater than or equal to " + minimum + " and less than or equal to " + maximum + ".");
      }
    },
    nonZero: {
      value: function nonZero(error) {
        return this.passes(function (i) {
          return i !== 0;
        }, error || "Input must be a non-zero number.");
      }
    },
    positive: {
      value: function positive(error) {
        return this.min(1, "Input must be positive.");
      }
    },
    negative: {
      value: function negative(error) {
        return this.max(-1, "Input must be negative.");
      }
    },
    min: {
      value: function min(minimum, error) {
        return this.passes(function (i) {
          return i >= minimum;
        }, error || "Input must be greater than or equal to " + minimum + ".");
      }
    },
    max: {
      value: function max(maximum, error) {
        return this.passes(function (i) {
          return i <= maximum;
        }, error || "Input must be less than or equal to " + maximum + ".");
      }
    },
    equals: {
      value: function equals(another, error) {
        return this.passes(function (i) {
          return i === another;
        }, error || "Input must be equal to " + another + ".");
      }
    },
    passes: {
      value: function passes(constraint, error) {
        return new NumberValidation(this.constraints.concat(this.createConstraint(constraint, error)));
      }
    },
    test: {
      value: function test(input) {
        var number = NumberValidation.checkNumber(input);
        if (number) {
          var errors = this.constraints.map(function (c) {
            var result = c.constraint(number);
            return [result, result ? null : c.error];
          }).filter(function (t) {
            return !t[0];
          }).map(function (c) {
            return c[1];
          });

          return errors;
        } else {
          return ["Input is not a number."];
        }
      }
    }
  }, {
    checkNumber: {
      value: function checkNumber(input) {
        if (typeof input === "number" && input % 1 === 0) {
          return input;
        } else if (typeof input === "string" && parseInt(input) !== NaN) {
          return parseInt(input);
        } else {
          return null;
        }
      }
    }
  });

  return NumberValidation;
})(BaseValidation);

module.exports = NumberValidation;