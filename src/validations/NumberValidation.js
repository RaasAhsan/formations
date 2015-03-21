import BaseValidation from './BaseValidation';

export class NumberValidation extends BaseValidation {
  constructor(constraints) {
    this.constraints = constraints;
  }

  bounds(minimum, maximum, error) {
    return this.passes(i => i >= minimum && i <= maximum, error || `Input must be greater than or equal to ${minimum} and less than or equal to ${maximum}.`);
  }

  nonZero(error) {
    return this.passes(i => i !== 0, error || `Input must be a non-zero number.`);
  }

  positive(error) {
    return min(1, "Input must be positive.");
  }

  negative(error) {
    return max(-1, "Input must be negative.");
  }

  min(minimum, error) {
    return this.passes(i => i >= minimum, error || `Input must be greater than or equal to ${minimum}.`);
  }

  max(maximum, error) {
    return this.passes(i => i <= minimum, error || `Input must be less than or equal to ${maximum}.`);
  }

  equals(another, error) {
    return this.passes(i => i === another, error || `Input must be equal to ${another}.`);
  }

  passes(constraint, error) {
    return new NumberValidation(constraints.concat(this.createConstraint(constraint, error)));
  }

  test(input) {

  }

  static checkNumber(input) {
    if(typeof input === 'number' && input % 1 === 0) {
      return input;
    } else if(typeof input === 'string' && parseInt(input) !== NaN) {
      return parseInt(input);
    } else {
      return null;
    }
  }
}
