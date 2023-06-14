// function #1
function getMaxDigit(number){
  const allNumbers = String(number).split('');
  for(let opt in allNumbers){
    allNumbers[opt] = Number(allNumbers[opt]);
  }
  return Math.max(...allNumbers);
}

// function #2
function pow(number, step){
  if(step === 0){
    return 1;
  }
  for(let i = 1; i < step; i++){
    number += number;
  }
  return number;
}

// function #3
function firstBigLetter(string){
  const nameArray = string.toLowerCase().split('');
  nameArray[0] = nameArray[0].toUpperCase();
  return nameArray.join("");
}

// function #4
function salaryWithoutTax(salary){
  return salary - salary*(19.5 / 100);
}

// function #5
function randomNumberBetween(N, M){
  return N < M ? parseInt(Math.random() * (M - N + 1) + N) : parseInt(Math.random() * (N - M + 1) + M);
}

//function #6
function countLetter(string, letter){
  let count = 0;
  for(let i = 0; i < string.length; i++){
    string[i].toLowerCase() === letter.toLowerCase() ? count++ : count;
  }
  return count;
}

//function #7
function convertCurrency(string){
  const currency = string.includes("UAH") || string.includes("uah") ? "UAH" : string.includes("$") ? "$" : "";
  if(currency != "UAH" && currency != "$"){
    return "Failed to convert";
  }
  return currency == "UAH" ? (Number(string.replace("UAH", '')) / 36.9546) + "$" : (Number(string.replace("$", '')) * 36.9546) + "UAH";
}

// function #8
function getRandomPassword(amount = 8){
  let result = '';
  for(let i = 0; i < amount; i++){
    result += parseInt(Math.random() * 10);
  }
  return result;
}

// function #9
function deleteLetters(string, letter){
  return string.toLowerCase().replaceAll(letter, '');
}

// function #10
function isPalindrome(string){
  return string.replaceAll(' ', '').toLowerCase().split('').reverse().join('') === string.replaceAll(' ', '').toLowerCase() ? true : false;
}

// function #11
function deleteDuplicateLetters(string){
  string = string.replaceAll(' ', '').toLowerCase();
  let result = '';
  for(let i = 0; i < string.length; i++){
    if(string.indexOf(string[i]) === string.lastIndexOf(string[i])){
      result += string[i];
    }
  }
  return result;
}

const result = document.getElementById('result');

result.innerText = `Функція №1: 1368574132 --> ${getMaxDigit(1368574132)}
Функція №2: 2**4 --> ${pow(2, 4)}
Функція №3: вЛАД --> ${firstBigLetter('вЛАД')}
Функція №4: 1000 --> ${salaryWithoutTax(1000)}
Функція №5: 1 <-> 10 --> ${randomNumberBetween(1, 10)}
Функція №6: Асталавіста --> ${countLetter("Асталавіста", "а")}
Функція №7: 100$ --> ${convertCurrency("100$")}
Функція №7: 100UAH --> ${convertCurrency("100UAH")}
Функція №8: пароль з 4 --> ${getRandomPassword(4)}
Функція №8: пароль з 8 --> ${getRandomPassword()}
Функція №9: blablablablablacar --> ${deleteLetters('blablablablablacar', 'a')}
Функція №10: кокос --> ${isPalindrome("кокос")}
Функція №10: Я несу гусеня --> ${isPalindrome("Я несу гусеня")}
Функція №11: Бісквіт був дуже ніжний --> ${deleteDuplicateLetters("Бісквіт був дуже ніжний")}`