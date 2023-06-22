// function 1
function getRandomArray(length, min, max){
  const randomNumbers = [];
  for(let i = 0; i < length; i++){
    randomNumbers[i] = min < max ? parseInt(Math.random()*(max - min + 1) + min) : parseInt(Math.random()*(min - max + 1) + max);
  }
  return randomNumbers;
}

const randomArray = getRandomArray(15, 1, 100);
console.log(randomArray);

// function 2
function getModa(...numbers) {
  const numberCounts = {};
  let maxCount = 0;
  let moda = [];

  numbers.forEach((number) => {
    if (typeof number === 'number' && Number.isInteger(number)) {
      if (numberCounts[number]) {
        numberCounts[number]++;
      } else {
        numberCounts[number] = 1;
      }
    }
  });
  for (const opt in numberCounts) {
    const count = numberCounts[opt];
    if (count > maxCount) {
      moda = [Number(opt)];
      maxCount = count;
    } else if (count === maxCount) {
      moda.push(Number(opt));
    }
  }

  return moda;
}

const moda = getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
console.log(moda);

// function 3
function getAverage(...numbers){
  return numbers.reduce(
    function(prev, next){
      if(Number.isInteger(next)){
        prev += next;
      }else{
        prev = prev;
      }
      return prev;
    }, 0
  ) / numbers.length;
}

const average = getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
console.log(average);

// function 4
function getMedian(...numbers) {
  const integerNumbers = numbers.filter((number) => Number.isInteger(number));
  integerNumbers.sort((a, b) => a - b);

  const medianIndex = Math.floor(integerNumbers.length / 2);
  const lowerMedianIndex = medianIndex - 1;

  return integerNumbers.length % 2 === 0 ? (integerNumbers[lowerMedianIndex] + integerNumbers[medianIndex]) / 2 : integerNumbers[medianIndex];
}

const median = getMedian(4,56,1,2.3,7,3);
console.log(median);

// function 5
function filterEvenNumbers(...numbers){
  const filtered = numbers.filter(n => n % 2 !== 0);
  return filtered;
}

const filtered = filterEvenNumbers(1, 2, 3, 4, 5, 6);
console.log(filtered);

// function 6
function countPositiveNumbers(...numbers){  
  const counted = numbers.filter(n => n > 0);
  return counted.length;
}

const counted = countPositiveNumbers(1, -2, 3, -4, -5, 6,);
console.log(counted);

// function 7
function getDividedByFive(...numbers){
  const filtered = numbers.filter(n => n % 5 == 0);
  return filtered;
}

const byFive = getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
console.log(byFive);

// function 8
function replaceBadWords(string) {
  const words = string.split(' ');

  for (let i = 0; i < words.length; i++) {
    if (words[i].includes('shit')) {
      words[i] = words[i].replace('shit', '****');
    } else if (words[i].includes('fuck')) {
      words[i] = words[i].replace('fuck', '****');
    }
  }

  return words.join(' ');
}

const badWords = replaceBadWords("Are you fucking kidding?");
console.log(badWords);

// function 9
function divideByThree(word) {
  const result = [];

  let i = 0;
  while (i < word.length) {
    if (i + 3 <= word.length) {
      result.push(word.substr(i, 3));
      i += 3;
    } else {
      result.push(word.substr(i));
      break;
    }
  }

  return result;
}

const divide = divideByThree("Commander");
console.log(divide);

// function 10
function generateCombinations(word) {
  const combinations = [];

  function generate(word, current = '') {
    if (current.length === word.length) {
      combinations.push(current);
      return;
    }

    for (let i = 0; i < word.length; i++) {
      if (current.includes(word[i])) {
        continue;
      }
      generate(word, current + word[i]);
    }
  }

  generate(word);
  return combinations;
}

const combinations = generateCombinations("man");
console.log(combinations);