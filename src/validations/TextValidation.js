import BaseValidation from './BaseValidation';

export default class TextValidation extends BaseValidation {
  constructor(constraints) {
    this.constraints = constraints;
  }

  nonEmpty(error) {
    return this.minLength(1, "Input cannot be empty.");
  }

  bounds(minimum, maximum, error) {
    return this.passes(i => i.length >= minimum && i.length <= maximum, error || `Input must be greater than or equal to ${minimum} and less than or equal to ${maximum}.`);
  }

  minLength(minimum, error) {
    return this.passes(i => i.length >= minimum, error || `Input length must be greater than or equal to ${minimum}.`);
  }

  maxLength(maximum, error) {
    return this.passes(i => i.length <= maximum, error || `Input length must be less than or equal to ${maximum}.`);
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

  test(input, error) {
    var text = TextValidation.checkText(input);
    if(text) {
      var errors = this.constraints.map(c => {
        var result = c.constraint(text);
        return [result, result ? null : c.error];
      }).filter(t => !t[0]).map(c => c[1]);

      return errors;
    } else {
      return [`Input is not a string.`];
    }
  }

  static checkText(input) {
    if(typeof input === 'string' || input == "") {
      return input;
    } else {
      return null;
    }
  }
}
