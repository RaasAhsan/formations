"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var ValidationResult = _interopRequire(require("./ValidationResult"));

var validateForm = function validateForm(form, fieldValidations) {
  var results = Object.keys(form).map(function (key) {
    var validation = fieldValidations[key];
    if (validation) {
      var errors = validation.test(form[key]);
      var passed = errors.length === 0;

      return {
        field: key,
        passed: passed,
        errors: passed ? [] : errors
      };
    } else {
      console.warn("A validation for field " + key + " was not found. Set the validations to an empty array for this field.");

      return {
        field: key,
        passed: true,
        errors: []
      };
    }
  });
  return new ValidationResult(results);
};

exports.validateForm = validateForm;
var getField = function getField(target, name) {
  var field = target.querySelector("[name=\"" + name + "\"]").value;
  if (!field) {
    console.warn("The field " + name + " couldn't be found in the given target.");
  }
  return field;
};

exports.getField = getField;
var createForm = function createForm(target, fields) {
  return fields.reduce(function (acc, x) {
    var field = getField(target, x);
    if (field) acc[x] = getField(target, x);
    return acc;
  }, {});
};
exports.createForm = createForm;