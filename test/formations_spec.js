var expect = require('chai').expect;

import {validateForm, getField, createForm} from '../src/formations';
import {number, text, boolean} from '../src/Validations';

describe('formations', function(){
  var form = {
    name: 'Agro',
    email: 'agro@jantox.com',
    password: 'ilikecake'
  };
  var faulty = {
    name: 'Agrosissy',
    email: 'notanemail',
    password: 'ilikecake'
  };
  var validation = {
    name: text.maxLength(6, "The name is too long."),
    email: text.minLength(11),
    password: text
  }

  var results = validateForm(form, validation);
  var errors = validateForm(faulty, validation);
  
  it('should correctly validate a form', function(){
    expect(results.passed()).to.equal(true);
    expect(errors.passed()).to.equal(false);
  });

  it('should return the errors for a field', function(){
    var nameError = errors.getErrorsFor('name');

    expect(nameError[0]).to.equal("The name is too long.");
  });

});
