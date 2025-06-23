function generatePassword(
  length,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols
) {
  const charUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const charLowercase = 'abcdefghijklmnopqrstuvwxyz';
  const charNumbers = '1234567890';
  const charSymbols = '!@#$%^&*()_+-=';

  let allowedChars = '';
  let password = '';

  allowedChars += includeUppercase ? charUppercase : '';
  allowedChars += includeLowercase ? charLowercase : '';
  allowedChars += includeNumbers ? charNumbers : '';
  allowedChars += includeSymbols ? charSymbols : '';

  // console.log(allowedChars);
  if (length <= 0) {
    return `(Length must be atleast 1)`;
  }

  if (allowedChars.length === 0) {
    return `(Must include atleast 1 character type)`;
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  return password;
}

let passwordText = document.getElementById('generatedPassword');

const passwordLength = 12;
const includeUppercase = true;
const includeLowercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(
  passwordLength,
  includeUppercase,
  includeLowercase,
  includeNumbers,
  includeSymbols
);
// console.log(`Generated Password: ${password}`);
passwordText.textContent = `Generated Password: ${password}`;
