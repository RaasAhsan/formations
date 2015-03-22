import ValidationResult from './ValidationResult';

export var validateForm = function(form, fieldValidations) {
  var results = Object.keys(form).map(key => {
    var validation = fieldValidations[key];
    if(validation) {
      var errors = validation.test(form[key]);
      var passed = errors.length === 0;

      return {
        field: key,
        passed: passed,
        errors: passed ? null : errors
      };
    } else {
      console.warn(`A validation for field ${key} was not found. Set the validations to an empty array for this field.`);

      return {
        field: key,
        passed: true,
        errors: null
      };
    }
  });
  return new ValidationResult(results);
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
