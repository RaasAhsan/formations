var expect = require('chai').expect;

var ValidationResult = require('../src/ValidationResult');

describe('ValidationResult', function(){
  var validationResult;

  beforeEach(function(){
    validationResult = new ValidationResult();
  });

  it('should add a validation', function(){
    validationResult.addCheck({
      field: 'name',
      passed: true,
      error: null
    });

    expect(validationResult.numberOfChecks()).to.equal(1);
  });

  it('should have one successful validation and no failed validations', function(){
    validationResult.addCheck({
      field: 'name',
      passed: true,
      error: null
    });

    expect(validationResult.numberOfSuccesses()).to.equal(1);
    expect(validationResult.numberOfFails()).to.equal(0);
  });

  it('should have one failed validation and no successful validations', function(){
    validationResult.addCheck({
      field: 'name',
      passed: false,
      error: "The name is too long."
    });

    expect(validationResult.numberOfFails()).to.equal(1);
    expect(validationResult.numberOfSuccesses()).to.equal(0);
  });

});
