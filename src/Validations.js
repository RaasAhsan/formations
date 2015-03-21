
export var number = new NumberValidation([]);
export var string = new StringValidation([]);
export var boolean = new BooleanValidation([]);

var createCheck = (check, error) => [{
  check: check,
  error: error
}]

class NumberValidation {
  constructor(checks) {
    this.checks = checks;
  }

  bounds(minimum, maximum, error) {
    return this.passes(i => i >= minimum && i <= maximum, error || `Input must be greater than or equal to ${minimum} and less than or equal to ${maximum}.`);
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

  passes(check, error) {
    return new NumberValidation(checks.concat(createCheck(check, error)));
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

class StringValidation {
  constructor(checks) {
    this.checks = checks;
  }

  minLength(minimum) {
    return this.passes(i => i.length >= minimum, error || `Input's length must be greater than or equal to ${minimum}.`);
  }

  maxLength(maximum) {
    return this.passes(i => i.length <= minimum, error || `Input's length must be less than or equal to ${maximum}.`);
  }

  equals(another) {
    return this.passes(i => i === another, error || `Input must be equal to '${another}'.`);
  }

  matches(regex) {
    return this.passes(i => i.match(regex), error || `Input must match the regex '${regex}'.`);
  }

  passes(check, error) {
    return new StringValidation(this.checks.concat(createCheck(check, error)));
  }

  test(input) {

  }

  static checkString(input) {
    if(typeof input === 'string') {
      return input;
    } else {
      return null;
    }
  }
}

class BooleanValidation {
  constructor(checks) {
    this.checks = checks;
  }

  equals(another) {
    return new BooleanValidation(this.checks.concat(createCheck(
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
