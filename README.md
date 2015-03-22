Formations [![Build Status](https://travis-ci.org/Agrosis/formations.svg?branch=master)](https://travis-ci.org/Agrosis/formations)
=============================
A simple and complete server-side and client-side validations library in ES6 JavaScript.

Influence
-----------------------------
Play Framework 2.x.x allows easily defined and testable form validations.

Features
-----------------------------
+ Easily transformable constraints i.e. `number.min(10).max(56)` or `text.matches("[A-Za-z]")`
+ Makes no assumption of client/server
+ Validates JSON forms
+ `"true"` and `true` will both validate as booleans (same with other validation types)
+ Validate on your own "types" by writing `text` constraints

Install
-----------------------------
Run:
`npm install --save formations`

Usage
-----------------------------
Here is an example validation for a register form.

```javascript
import * as formations from 'formations';
import {text, number, email} from 'formations/lib/Validations';
 
var form = formations.createForm(document, ['name', 'email', 'password', 'age']);
 
var registerValidation = {
  name: text.minLength(2, "You need a bigger name.").maxLength(32, "Your name must be less than 33 characters.."),
  password: text.bounds(8, 64, "Your password must be between 8 and 64 characters."),
  email: email.maxLength(64, "Use a smaller e-mail, please!"),
  age: number.min(13, "You must be at least 13 years old.").max(80, "You're too old for this, dude.")
};
 
var results = formations.validateForm(form, registerValidation);
 
if(results.passed())
  console.log("You're good to go!");
else
  console.log("fail");
```

### List of validations
+ number
+ text
+ boolean
+ email

If there is a validation "type" we don't have, just write a `text` validation and write the needed constraints.

Contributing
-----------------------------
Open pull requests and issues whenever needed!
