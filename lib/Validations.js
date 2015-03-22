"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var NumberValidation = _interopRequire(require("./validations/NumberValidation"));

var TextValidation = _interopRequire(require("./validations/TextValidation"));

var BooleanValidation = _interopRequire(require("./validations/BooleanValidation"));

var number = new NumberValidation([]);
exports.number = number;
var text = new TextValidation([]);
exports.text = text;
var boolean = new BooleanValidation([]);

exports.boolean = boolean;
var email = text.matches("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?", "Invalid email provided.");
exports.email = email;