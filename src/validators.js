export function nameValidator(value) {
  if (value === '') {
    return 'name should not be empty';
  } else if (value.length > 100) {
    return 'max characters allowed are 100';
  }
}

export function ageValidator(value) {
  if (!+value) {
    return 'age should be a number';
  } else if (!(+value >= 18 && +value <= 99)) {
    return 'age should be between 18 and 99';
  } else return '';
}

export function emailValidator(value) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!re.test(value)) {
    return 'invalid email address';
  } else return '';
}

export function passwordValidator(value) {
  if (value.length < 8) {
    return 'password must be atleast 8 characters';
  }
}
