"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var BaseValidation = _interopRequire(require("./BaseValidation"));

var TextValidation = (function (_BaseValidation) {
  function TextValidation(constraints) {
    _classCallCheck(this, TextValidation);

    this.constraints = constraints;
  }

  _inherits(TextValidation, _BaseValidation);

  _createClass(TextValidation, {
    nonEmpty: {
      value: function nonEmpty(error) {
        return this.minLength(1, "Input cannot be empty.");
      }
    },
    bounds: {
      value: function bounds(minimum, maximum, error) {
        return this.passes(function (i) {
          return i.length >= minimum && i.length <= maximum;
        }, error || "Input must be greater than or equal to " + minimum + " and less than or equal to " + maximum + ".");
      }
    },
    minLength: {
      value: function minLength(minimum, error) {
        return this.passes(function (i) {
          return i.length >= minimum;
        }, error || "Input length must be greater than or equal to " + minimum + ".");
      }
    },
    maxLength: {
      value: function maxLength(maximum, error) {
        return this.passes(function (i) {
          return i.length <= maximum;
        }, error || "Input length must be less than or equal to " + maximum + ".");
      }
    },
    equals: {
      value: function equals(another, error) {
        return this.passes(function (i) {
          return i === another;
        }, error || "Input must be equal to '" + another + "'.");
      }
    },
    matches: {
      value: function matches(regex, error) {
        return this.passes(function (i) {
          return i.match(regex);
        }, error || "Input must match the regex '" + regex + "'.");
      }
    },
    passes: {
      value: function passes(constraint, error) {
        return new TextValidation(this.constraints.concat(this.createConstraint(constraint, error)));
      }
    },
    test: {
      value: function test(input, error) {
        var text = TextValidation.checkText(input);
        if (text) {
          var errors = this.constraints.map(function (c) {
            var result = c.constraint(text);
            return [result, result ? null : c.error];
          }).filter(function (t) {
            return !t[0];
          }).map(function (c) {
            return c[1];
          });

          return errors;
        } else {
          return ["Input is not a string."];
        }
      }
    }
  }, {
    checkText: {
      value: function checkText(input) {
        if (typeof input === "string" || input == "") {
          return input;
        } else {
          return null;
        }
      }
    }
  });

  return TextValidation;
})(BaseValidation);

module.exports = TextValidation;