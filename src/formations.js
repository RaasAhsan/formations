import ValidationResult from './ValidationResult';

export var createValidation = function(validation, error) {
  return {
    validate: validation,
    error: error
  };
};

export var validateForm = function(form, fieldValidations) {
  var result = new ValidationResult();
  for(var key in form) {
    if(form.hasOwnProperty(key)) {
      var validations = fieldValidations[key];
      if(validations) {
        var tries = validations.foreach(v => {
          var passed = v.validate(form[key])

          result.addCheck({
            field: key,
            passed: passed,
            error: passed ? "" : v.error
          });
        });
      } else {
        console.warn("A validation for field `" + key + "` was not found. Set the validations to an empty array for this field.");
      }
    }
  }

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