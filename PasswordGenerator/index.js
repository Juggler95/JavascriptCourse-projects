function generatePassword(
  length,
  includeUppercase,
  includeLowercase,
  includeNumbers,
  includeSymbols
) {
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const numberChars = '1234567890';
  const symbolsChars = '!@#$%^&*()_+-=';

  let allowedChars = '';
  let password = '';

  allowedChars += includeUppercase ? uppercaseChars : '';
  allowedChars += includeLowercase ? lowercaseChars : '';
  allowedChars += includeNumbers ? numberChars : '';
  allowedChars += includeSymbols ? symbolsChars : '';

  //   console.log(allowedChars);
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  if (length < 0) {
    return `(Length must be atleast 1)`;
  }
  if (allowedChars.length === 0) {
    return `(Must select atleast 1 character type)`;
  }

  return password;
}

function generate() {
  const passwordText = document.getElementById('generatedPassword');

  const lengthInput = document.getElementById('passwordLength');
  const uppercaseCheckbox = document.getElementById('includeUppercase');
  const lowercaseCheckbox = document.getElementById('includeLowercase');
  const numbersCheckbox = document.getElementById('includeNumbers');
  const symbolsCheckbox = document.getElementById('includeSymbols');

  const passwordLength = lengthInput.value;
  const includeUppercase = uppercaseCheckbox.checked;
  const includeLowercase = lowercaseCheckbox.checked;
  const includeNumbers = numbersCheckbox.checked;
  const includeSymbols = symbolsCheckbox.checked;

  const password = generatePassword(
    passwordLength,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols
  );

  passwordText.innerHTML = `Generated Password: ${password}`;
}
// console.log(`Generated Password: ${password}`);
