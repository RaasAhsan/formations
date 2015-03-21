
export var number = new NumberValidation([]);
export var text = new TextValidation([]);
export var boolean = new BooleanValidation([]);

var createConstraint = (constraint, error) => [{
  constraint: constraint,
  error: error
}]

class NumberValidation {
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
    return new NumberValidation(constraints.concat(createConstraint(constraint, error)));
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

class TextValidation {
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
    return new TextValidation(this.constraints.concat(createConstraint(constraint, error)));
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

class BooleanValidation {
  constructor(constraints) {
    this.constraints = constraints;
  }

  equals(another, error) {
    return new BooleanValidation(this.constraints.concat(createConstraint(
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
