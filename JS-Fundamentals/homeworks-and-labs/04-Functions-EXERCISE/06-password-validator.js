function passwordValidator(pass) {
  let isValidLength = checkValidPassLength(pass);
  let isOnlyLettersDigits = checkOnlyLettersDigits(pass);
  let isMin2Digits = checkMin2Digits(pass);

  if (isValidLength && isOnlyLettersDigits && isMin2Digits) {
    console.log(`Password is valid`);
  }

  // 48-57 valid (numbers)
  // 65-90 valid BIG LETTERS
  // 97-122 valid small letters

  function checkValidPassLength(pass) {
    if (pass.length >= 6 && pass.length <= 10) {
      return true;
    } else {
      console.log(`Password must be between 6 and 10 characters`);
      return false;
    }
  }

  function checkOnlyLettersDigits(pass) {
    for (let curChar of pass) {
      let code = curChar.charCodeAt(0);

      if (
        !(
          (code >= 48 && code <= 57) ||
          (code >= 65 && code <= 90) ||
          (code >= 97 && code <= 122)
        )
      ) {
        console.log(`Password must consist only of letters and digits`);
        return false;
      }
    }

    return true;
  }

  function checkMin2Digits(pass) {
    let digits = 0;

    for (let curChar of pass) {
      let code = curChar.charCodeAt();

      if (code >= 48 && code <= 57) {
        digits++;
      }
    }
    if (digits < 2) {
      console.log(`Password must have at least 2 digits`);
      return false;
    } else {
      return true;
    }
  }
}
passwordValidator('login');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');
