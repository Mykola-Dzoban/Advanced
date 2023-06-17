const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій","Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

// function 1
function getPairs(students){
  const maleStudents = [];
  const femaleStudents = [];
  const pairs = [];

  for(let i = 0; i < students.length; i++){
    students[i].endsWith('а') || students[i].endsWith('я') ? femaleStudents.push(students[i]) : maleStudents.push(students[i]);
  }

  const minLength = Math.min(maleStudents.length, femaleStudents.length);
  for(let i = 0; i < minLength; i++){
    const pair = [maleStudents[i], femaleStudents[i]];
    pairs.push(pair);
  }

  return pairs;
}
const pairs = getPairs(students);
console.log(`Students pairs: `, pairs);
console.log(`#=========================================`);

// function 2
function getThemes(students, themes) {
  const pairsWithTheme = [];

  const minLength = Math.min(students.length, themes.length);
  for (let i = 0; i < minLength; i++) {
    const pair = [...students[i]];
    const joinedPair = pair.join(' і ');
    const pairWithTheme = [joinedPair, themes[i]];
    pairsWithTheme.push(pairWithTheme);
  }

  return pairsWithTheme;
}

const pairsWithTheme = getThemes(pairs, themes);
console.log(`Students pairs with themes: `, pairsWithTheme);
console.log(`#=========================================`);

// function 3
function studentsMarks(students, marks){
  const studentWithMark = [];

  const minLength = Math.min(students.length, marks.length);
  for(let i = 0; i < minLength; i++){
    const mark = [students[i], marks[i]];
    studentWithMark.push(mark);
  }

  return studentWithMark;
}

const studentWithMark = studentsMarks(students, marks);
console.log(`Students with marks: `, studentWithMark);
console.log(`#=========================================`);

// function 4
function markForPair(pairs){
  const markForPairs = [];

  for(let i = 0; i < pairs.length; i++){
    const pair = [...pairs[i]];
    const mark = parseInt(Math.random()*(5 - 1 + 1) + 1);
    pair.push(mark);
    markForPairs.push(pair);
  }

  return markForPairs;
}

const markForPairs = markForPair(pairsWithTheme);
console.log(`Students pairs with marks for themes: `, markForPairs);
