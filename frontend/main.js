let isNameValid = false;
let isEmailValid = false;
let isFormValid = false;

const INPUTS = {
  NAME: "name",
  EMAIL: "email"
}

const SELECTORS = {
  NAME: `input[name="name"]`,
  EMAIL: `input[name="email"]`,
  NAME_ERROR: `span.name-error-message`,
  EMAIL_ERROR: `span.email-error-message`,
}

let nameError = "";
let emailError = "";

const ERRORS = {
  REQUIRED: 'Required',
  MIN_LENGTH: (min) => `Min length is ${min}`,
  INVALID_EMAIL: 'Email is invalid' 
}

function getValue (selector) {
  const element = document.querySelector(selector);
  return element?.value || "";
}

function showError (selector, message) {
  const errors = document.querySelectorAll(selector);
  for (let i=0; i<errors.length; i++) {
    errors[i].innerHTML = message;
  }
}

function onChangeRegisterBtn () {
  const registerBtn = document.querySelector(`button.register-btn`);
  if (isFormValid) {
    registerBtn.classList.add('active');
  } else {
    registerBtn.classList.remove('active');
  }
}

function onChangeName () {
  const value = getValue(SELECTORS.NAME);
  if (value.length == 0) {
    isNameValid = false;
    isFormValid = false;
    nameError = ERRORS.REQUIRED;
  } else if (value.length < 2) {
    isNameValid = false;
    isFormValid = false;
    nameError = ERRORS.MIN_LENGTH(2);
  } else {
    isNameValid = true;
    nameError = ""
  }
  showError(SELECTORS.NAME_ERROR, nameError);
}

function onChangeEmail () {
  const value = getValue(SELECTORS.EMAIL);
  if (value.length == 0) {
    isEmailValid = false;
    isFormValid = false;
    emailError = ERRORS.REQUIRED;
  } else if (!validateEmail(value)) {
    isEmailValid = false;
    isFormValid = false;
    emailError = ERRORS.INVALID_EMAIL
  } else {
    isEmailValid = true;
    emailError = ""
  }
  showError(SELECTORS.EMAIL_ERROR, emailError);
}

function onChange(name) {
  if (name == INPUTS.NAME) {
    onChangeName();
  } else if (name == INPUTS.EMAIL) {
    onChangeEmail();
  }
  isFormValid = isNameValid && isEmailValid;
  onChangeRegisterBtn();
}

function resetForm () {
  let selectors = Object.keys(SELECTORS);
  for (let i=0; i<selectors.length; i++) {
    const element = document.querySelector(selectors[i]);
    if (element) element.innerHTML = "";
  }
  nameError = "";
  isFormValid = false;
  onChangeRegisterBtn();
}

function validateEmail(email) {
  return !!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
}

async function onRegister () {
  if (!isFormValid) return;
  const name = getValue(`input[name="name"]`);
  const email = getValue(`input[name="email"]`);
  const result = await fetch('https://ivs-backend.hieudinhvan.com/api/signups', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name, email})
  });
  if (result.ok) {
    alert('Register successfully!');
    resetForm();
  }
}