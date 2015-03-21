import BaseValidation from './BaseValidation';

export class BooleanValidation extends BaseValidation {
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
