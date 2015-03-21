import BaseValidation from './BaseValidation';

export default class BooleanValidation extends BaseValidation {
  constructor(constraints) {
    this.constraints = constraints;
  }

  equals(another, error) {
    return new BooleanValidation(this.constraints.concat(this.createConstraint(
      i => i === another,
      error || `Input must be equal to '${another}'.`
    )));
  }

  test(input) {
    var boolean = BooleanValidation.checkBoolean(input);
    if(boolean) {
      var errors = this.constraints.map(c => {
        var result = c.constraint(boolean);
        return [result, result ? null : c.error];
      }).filter(t => !t[0]).map(c => c[1]);

      return errors;
    } else {
      return [`Input is not a boolean.`];
    }
  }

  static checkBoolean(input) {
    if(typeof input === 'boolean') {
      return input;
    } else if(input === 'true') {
      return true;
    } else if(input === 'false') {
      return false;
    } else {
      return null;
    }
  }
}
