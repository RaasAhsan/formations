import BaseValidation from './BaseValidation';

export class TextValidation extends BaseValidation {
  constructor(constraints) {
    this.constraints = constraints;
  }

  nonEmpty(error) {
    return minLength(1, "Input cannot be empty");
  }

  minLength(minimum, error) {
    return this.passes(i => i.length >= minimum, error || `Input's length must be greater than or equal to ${minimum}.`);
  }

  maxLength(maximum, error) {
    return this.passes(i => i.length <= minimum, error || `Input's length must be less than or equal to ${maximum}.`);
  }

  equals(another, error) {
    return this.passes(i => i === another, error || `Input must be equal to '${another}'.`);
  }

  matches(regex, error) {
    return this.passes(i => i.match(regex), error || `Input must match the regex '${regex}'.`);
  }

  passes(constraint, error) {
    return new TextValidation(this.constraints.concat(this.createConstraint(constraint, error)));
  }

  test(input) {

  }

  static checkText(input) {
    if(typeof input === 'string') {
      return input;
    } else {
      return null;
    }
  }
}
