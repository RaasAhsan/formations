
export default class ValidationResult {
  constructor() {
    this.results = [];
  }

  passed() {
    return this.numberOfErrors() == 0;
  }

  numberOfErrors() {
    return this.results.filter(v => {
      return !v.passed;
    }).length;
  }

  getErrorFor(field) {
    var check = this.results.filter(v => {
      return v.field == field;
    });
    if(check.length == 0) {
      console.warn("A field with key `{$field}` does not exist.");
      return null;
    } else {
      return check.passed ? null : check.error;
    }
  }

  addCheck(check) {
    this.results.push(check);
  }

}
