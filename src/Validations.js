import NumberValidation from './validations/NumberValidation';
import TextValidation from './validations/TextValidation';
import BooleanValidation from './validations/BooleanValidation';

export var number = new NumberValidation([]);
export var text = new TextValidation([]);
export var boolean = new BooleanValidation([]);

export var email = text.matches("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?", "Invalid email provided.");
