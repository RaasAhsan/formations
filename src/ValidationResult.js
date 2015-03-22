
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
    var check = this.results.filter(v => {
      return v.field === field;
    });
    if(check.length == 0) {
      console.warn("A field with key `{$field}` does not exist.");
      return null;
    } else {
      return check[0].passed ? null : check[0].errors;
    }
  }
}
