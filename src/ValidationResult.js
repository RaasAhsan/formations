
export default class ValidationResult {
  constructor(results) {
    this.results = results;
  }

  passed() {
    return this.fails().length === 0;
  }

  fields() {
    return this.results;
  }

  successes() {
    return this.results.filter(v => {
      return v.passed;
    });
  }

  fails() {
    return this.results.filter(v => {
      return !v.passed;
    });
  }

  getErrorsFor(field) {
    var check = this.results.find(v => v.field === field);
    if(check) {
      return check.passed ? [] : check.errors;
    } else {
      console.warn("A field with key `{$field}` does not exist.");
      return null;
    }
  }
}
