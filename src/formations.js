import ValidationResult from './ValidationResult';

export var Validations = require('./Validations');

export var validateForm = function(form, fieldValidations) {
  var results = Object.keys(form).map(key => {
    var validation = fieldValidations[key];
    if(validation) {
      var errors = validation.test(form[key]);
      var passed = errors.length === 0;

      return {
        field: key,
        passed: passed,
        errors: passed ? [] : errors
      };
    } else {
      console.warn(`A validation for field ${key} was not found. Set the validations to an empty array for this field.`);

      return {
        field: key,
        passed: true,
        errors: []
      };
    }
  });
  return new ValidationResult(results);
}

export var getField = function(target, name) {
    var field = target.querySelector('[name="' + name + '"]').value;
    if(!field) {
      console.warn(`The field ${name} couldn't be found in the given target.`);
    }
    return field;
};

export var createForm = function(target, fields) {
  return fields.reduce(function(acc, x) {
    var field = getField(target, x);
    if(field)
      acc[x] = getField(target, x);
    return acc;
  }, {});
}
