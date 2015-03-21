var expect = require('chai').expect;

import {boolean} from '../../src/Validations';

describe('BooleanValidation', function(){
  var booleanValidation;

  it('should test equality boolean validations correctly', function(){
    booleanValidation = boolean.equals(true);

    expect(booleanValidation.test(true)).to.have.length(0);
    expect(booleanValidation.test(false)).to.have.length(1);
  });
});
