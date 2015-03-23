
export default class BaseValidation {
  createConstraint(constraint, error) {
    return [{
      constraint: constraint,
      error: error
    }]
  }

  // if the given field's validation is successful, impose the given constraint, otherwise ignore it
  cross(field, validation, constraint, error) {
    return this.passes((i, form) => {
      if(!validation) {
        console.warn(`Invalid validation specified.`);
        return true;
      }
      if(!form[field]) {
        console.warn(`The key '${field}' doesn't exist in the specified form.`);
        return true;
      }
      
      var fieldPass = validation.test(field, form);
      if(fieldPass.length === 0) {
        return constraint.test(i, form).length === 0;
      } else {
        return true;
      }
    }, error || 'Input does not satisfy cross-field restrictions.');
  }
}
