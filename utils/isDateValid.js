function isDateValid(date) {
  const regexDate = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d$/;
  return regexDate.test(date);
}

module.exports = isDateValid;

/*
Referência para validação do formato da data:
https://stackoverflow.com/questions/15491894/regex-to-validate-date-formats-dd-mm-yyyy-dd-mm-yyyy-dd-mm-yyyy-dd-mmm-yyyy
*/
