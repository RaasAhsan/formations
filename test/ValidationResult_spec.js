var expect = require('chai').expect;

var ValidationResult = require('../src/ValidationResult');

describe('ValidationResult', function(){
  var validationResult;

  it('should add a validation', function(){
    validationResult = new ValidationResult([{
      field: 'name',
      passed: true,
      errors: []
    }]);

    expect(validationResult.fields().length).to.equal(1);
  });

  it('should have one successful validation and no failed validations', function(){
    validationResult = new ValidationResult([{
      field: 'name',
      passed: true,
      errors: []
    }]);

    expect(validationResult.successes()).to.have.length(1);
    expect(validationResult.fails()).to.have.length(0);
  });

  it('should have one failed validation and no successful validations', function(){
    validationResult = new ValidationResult([{
      field: 'name',
      passed: false,
      errors: ['The name is too long.']
    }]);

    expect(validationResult.fails()).to.have.length(1);
    expect(validationResult.successes()).to.have.length(0);
  });

});
