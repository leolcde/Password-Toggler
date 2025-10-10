const passwordInput = document.getElementById('passwordInput');
const minChar = document.getElementById('minChar');
const minNumber = document.getElementById('minNumber');
const minMaj = document.getElementById('minMaj');
const minSpecialChar = document.getElementById('minSpecialChar');

function containNumber(str)
{
  let countNumber = 0;
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= '0' && str[i] <= '9')
      countNumber++;
  }
  return countNumber;
}

function containMaj(str)
{
  let countMaj = 0;
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= 'A' && str[i] <= 'Z')
      countMaj++;
  }
  return countMaj;
}

function containSpecialChar(str)
{
  let countMaj = 0;
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= 'A' && str[i] <= 'Z')
      countMaj++;
  }
  return countMaj;
}

function containSpecialChar(str)
{
  let countSpecialChar = 0;
  const specialChars = "!@#$%^&*(),.?\":{}|<>-_";
  
  for (let i = 0; i < str.length; i++) {
    if (specialChars.includes(str[i]))
      countSpecialChar++;
  }
  return countSpecialChar;
}

passwordInput.addEventListener('input', () => {
  const password = passwordInput.value;

  if (password.length >= 8) {
    minChar.classList.remove('text-danger');
    minChar.classList.add('text-success');
  } else if (password.length < 8) {
    minChar.classList.remove('text-success');
    minChar.classList.add('text-danger');
  }

  if (containNumber(password) >= 2) {
    minNumber.classList.remove('text-danger');
    minNumber.classList.add('text-success');
  } else if (containNumber(password) < 2) {
    minNumber.classList.remove('text-success');
    minNumber.classList.add('text-danger');
  }

  if (containMaj(password) >= 1) {
    minMaj.classList.remove('text-danger');
    minMaj.classList.add('text-success');
  } else if (containMaj(password) < 1) {
    minMaj.classList.remove('text-success');
    minMaj.classList.add('text-danger');
  }

  if (containSpecialChar(password) >= 1) {
    minSpecialChar.classList.remove('text-danger');
    minSpecialChar.classList.add('text-success');
  } else if (containMaj(password) < 1) {
    minSpecialChar.classList.remove('text-success');
    minSpecialChar.classList.add('text-danger');
  }
});
