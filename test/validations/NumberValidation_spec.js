var expect = require('chai').expect;

import {number} from '../../src/Validations';

describe('NumberValidation', function(){
  var numberValidation;

  it('should test minimum bounded number validations correctly', function(){
    numberValidation = number.min(8);

    expect(numberValidation.test(9)).to.have.length(0);
    expect(numberValidation.test(1)).to.have.length(1);
  });

  it('should test maximum bounded number validations correctly', function(){
    numberValidation = number.max(8);

    expect(numberValidation.test(2)).to.have.length(0);
    expect(numberValidation.test(10)).to.have.length(1);
  });

  it('should test bounded number validations correctly', function(){
    numberValidation = number.bounds(4,8);

    expect(numberValidation.test(6)).to.have.length(0);
    expect(numberValidation.test(10)).to.have.length(1);
  });

  it('should test equality number validations correctly', function(){
    numberValidation = number.equals(4);

    expect(numberValidation.test(4)).to.have.length(0);
    expect(numberValidation.test(5)).to.have.length(1);
  });

  it('should test non-zero number validations correctly', function(){
    numberValidation = number.nonZero();

    expect(numberValidation.test(2)).to.have.length(0);
    expect(numberValidation.test(0)).to.have.length(1);
  });

  it('should test positive number validations correctly', function(){
    numberValidation = number.positive();

    expect(numberValidation.test(4)).to.have.length(0);
    expect(numberValidation.test(-3)).to.have.length(1);
  });

  it('should test negative number validations correctly', function(){
    numberValidation = number.negative();

    expect(numberValidation.test(-4)).to.have.length(0);
    expect(numberValidation.test(3)).to.have.length(1);
  });
});
