function isEmailValid(email) {
  const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return regexEmail.test(email);
}

module.exports = isEmailValid;

/*
Referência para validação de email:
https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
*/
