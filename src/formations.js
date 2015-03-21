
import ValidationResult from './ValidationResult';

export var createValidation = function(validation, error) {
  return {
    validate: validation,
    error: error
  };
};

export var validateForm = function(form, fieldValidations) {
  var result = new ValidationResult();
  Object.keys(form).forEach(key => {
    var validations = fieldValidations[key];
    if(validations) {
      var tries = validations.forEach(v => {
        var passed = v.validate(form[key])

        result.addCheck({
          field: key,
          passed: passed,
          error: passed ? null : v.error
        });
      });
    } else {
      console.warn(`A validation for field ${key} was not found. Set the validations to an empty array for this field.`);
    }
  });

  return result;
}

export var getField = function(target, name) {
    return target.querySelector('[name="' + name + '"]').value;
};

export var createForm = function(target, fields) {
  return fields.reduce(function(acc, x) {
    acc[x] = getField(target, x);
    return acc;
  }, {});
}
