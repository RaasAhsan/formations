
export default class BaseValidation {

  createConstraint(constraint, error) {
    return [{
      constraint: constraint,
      error: error
    }]
  };

}
