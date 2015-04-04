import ValidationResult from './ValidationResult';


export var Validations = require('./Validations');

export var validateForm = function(form, fieldValidations) {
  var results = Object.keys(form).map(key => {
    if(key && form[key]) {
      var validation = fieldValidations[key];
      if(validation) {
        var errors = validation.test(form[key], form);
        var passed = errors.length === 0;

        return {
          field: key,
          passed: passed,
          errors: passed ? [] : errors
        };
      } else {
        console.warn(`A validation for field ${key} wasn't found. Set the validations to an empty array for this field.`);

        return {
          field: key,
          passed: true,
          errors: []
        };
      }
    } else {
      return {
        field: key,
        passed: false,
        errors: ["field not found."]
      };
    }
  });
  return new ValidationResult(results);
}

export var getField = function(target, name) {
  var field = target.querySelector('[name="' + name + '"]');
  if(field) {
    return field.value;
  } else {
    console.warn(`The field ${name} wasn't found in the given target.`);
    return null;
  }
};

export var createForm = function(target, fields) {
  return fields.reduce(function(acc, x) {
    if(x)
      acc[x] = getField(target, x);
    return acc;
  }, {});
}
