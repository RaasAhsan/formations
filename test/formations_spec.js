var expect = require('chai').expect;

import {validateForm, getField, createForm} from '../src/Formations';
import {number, text, boolean} from '../src/Validations';

describe('formations', function(){
  var form = {
    name: 'Agro',
    email: 'agro@jantox.com',
    password: 'ilikecake',
    counter: 10
  };
  var faulty = {
    name: 'Agrosissy',
    email: 'notanemail',
    password: 'ilikecake',
    counter: 5
  };
  var validation = {
    name: text.maxLength(6, "The name is too long."),
    email: text.minLength(11),
    password: text,
    counter: number.cross('password', text.minLength(5), number.min(8), "number too small.")
  }

  var results = validateForm(form, validation);
  var errors = validateForm(faulty, validation);
  
  it('should correctly validate a form', function(){
    expect(results.passed()).to.equal(true);
    expect(errors.passed()).to.equal(false);
  });

  it('should return the errors for a field', function(){
    var nameError = errors.getErrorsFor('name');
    var noPasswordError = errors.getErrorsFor('password');

    expect(nameError[0]).to.equal("The name is too long.");
    expect(noPasswordError).to.have.length(0);
  });

  it('should correctly test cross-validated fields', function(){
    var counterError = errors.getErrorsFor('counter');

    console.log(errors);

    expect(counterError[0]).to.equal("number too small.");
  });

  it('should return null errors for a non-existant field', function(){
    var check = errors.getErrorsFor('wee');

    expect(check).to.equal(null);
  });

});
