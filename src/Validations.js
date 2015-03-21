
export var integer = new IntegerValidation([]);
export var string = new StringValidation([]);
export var boolean = new BooleanValidation([]);

var createCheck = (check, error) => [{
  check: check,
  error: error
}]

class IntegerValidation {
  constructor(checks) {
    this.checks = checks;
  }

  bounds(minimum, maximum, error) {
    return new IntegerValidation(this.checks.concat(createCheck(
      i => i >= minimum && i <= maximum,
      error || `Input must be greater than or equal to ${minimum} and less than or equal to ${maximum}.`
    )));
  }

  min(minimum, error) {
    return new IntegerValidation(this.checks.concat(createCheck(
      i => i >= minimum,
      error || `Input must be greater than or equal to ${minimum}.`
    )));
  }

  max(maximum, error) {
    return new IntegerValidation(this.checks.concat(createCheck(
      i => i <= minimum,
      error || `Input must be less than or equal to ${maximum}.`
    )));
  }

  equals(another, error) {
    return new IntegerValidation(this.checks.concat(createCheck(
      i => i === another,
      error || `Input must be equal to ${another}.`
    )));
  }

  passes(check, error) {
    return new IntegerValidation(checks.concat(createCheck(check, error)));
  }

  test(input) {

  }

  static checkInteger(input) {
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
    return new StringValidation(this.checks.concat(createCheck(
      i => i.length >= minimum,
      error || `Input's length must be greater than or equal to ${minimum}.`
    )));
  }

  maxLength(maximum) {
    return new StringValidation(this.checks.concat(createCheck(
      i => i.length <= minimum,
      error || `Input's length must be less than or equal to ${maximum}.`
    )));
  }

  equals(another) {
    return new StringValidation(this.checks.concat(createCheck(
      i => i === another,
      error || `Input must be equal to '${another}'.`
    )));
  }

  passes(check, error) {
    return new StringValidation(checks.concat(createCheck(check, error)));
  }

  matches(regex) {
    return new StringValidation(this.checks.concat(createCheck(
      i => i.match(regex),
      error || `Input must match the regex '${regex}'.`
    )));
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
