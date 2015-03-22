var expect = require('chai').expect;

import {text, email} from '../../src/Validations';

describe('TextValidation', function(){
  var textValidation;

  it('should test minimum bounded string validations correctly', function(){
    textValidation = text.minLength(8);

    expect(textValidation.test("Muhtasim Ahsan")).to.have.length(0);
    expect(textValidation.test("Agro")).to.have.length(1);
  });

  it('should test maximum bounded string validations correctly', function(){
    textValidation = text.maxLength(8);

    expect(textValidation.test("Agro")).to.have.length(0);
    expect(textValidation.test("Muhtasim Ahsan")).to.have.length(1);
  });

  it('should test bounded string validations correctly', function(){
    textValidation = text.bounds(2, 8);

    expect(textValidation.test("Agro")).to.have.length(0);
    expect(textValidation.test("a")).to.have.length(1);
    expect(textValidation.test("Muhtasim Ahsan")).to.have.length(1);
  });

  it('should test string equality validations correctly', function(){
    textValidation = text.equals("happy");

    expect(textValidation.test("happy")).to.have.length(0);
    expect(textValidation.test("sad")).to.have.length(1);
  });

  it('should test non-empty string validations correctly', function(){
    textValidation = text.nonEmpty();

    expect(textValidation.test("")).to.have.length(1);
    expect(textValidation.test("not empty!")).to.have.length(0);
  });

  it('should test regex string validations correctly', function(){
    textValidation = text.matches("[A-Za-z]");

    expect(textValidation.test("2")).to.have.length(1);
    expect(textValidation.test("a")).to.have.length(0);
  });

  it('should test email validations correctly', function(){
    textValidation = email;

    expect(textValidation.test("agro@jantox.com")).to.have.length(0);
    expect(textValidation.test("a@a")).to.have.length(1);
  })

  it('should test combinations of string validations correctly', function(){
    textValidation = text.minLength(2).maxLength(8);

    expect(textValidation.test("asdf")).to.have.length(0);
  });
});
