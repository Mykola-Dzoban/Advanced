const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
  }, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
  }, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
}];

// 1 --------------------
function getSubjects(student){
  const studentSubjects = [];
  for(let opt in student.subjects){
    opt = opt.replaceAll('_', ' ');
    opt = opt.split('');
    opt[0] = opt[0].toUpperCase();
    studentSubjects.push(opt.join(''));
  }
  return studentSubjects;
}
console.log('Function 1 result:');
console.log(getSubjects(students[0]));
console.log('--------------------------');
// 2 --------------------
function getAverageMark(student){
  let marksSum = 0;
  let marksAmount = 0;
  for(let opt in student.subjects){
    marksAmount += student.subjects[opt].length;
    for(let i = 0; i < student.subjects[opt].length; i++){
      marksSum += student.subjects[opt][i];
    }
  }
  return (marksSum / marksAmount).toFixed(2);
}
console.log('Function 2 result:');
console.log(getAverageMark(students[0]));
console.log('--------------------------');
// 3 --------------------
function getStudentInfo(student){
  return {
    course: student.course,
    name: student.name,
    averageMark: getAverageMark(student)
  }
}
console.log('Function 3 result:');
console.log(getStudentInfo(students[0]));
console.log('--------------------------');
// 4 --------------------
function getStudentsNames(students){
  const studentsName = [];
  for(const opt of students){
    studentsName.push(opt.name);
  }
  return studentsName.sort();
}
console.log('Function 4 result:');
console.log(getStudentsNames(students));
console.log('--------------------------');
// 5 --------------------
function getBestStudent(students){
  const studentsName = [];
  const studentsAverageMarks = [];
  for(const opt of students){
    studentsName.push(opt.name);
  }
  for(let i = 0; i < students.length; i++){
    studentsAverageMarks.push(getAverageMark(students[i]));
  }
  const bestMark = Math.max(...studentsAverageMarks);
  const indexOfBestStudent = studentsAverageMarks.indexOf(String(bestMark));
  return studentsName[indexOfBestStudent];
}
console.log('Function 5 result:');
console.log(getBestStudent(students));
console.log('--------------------------');
// 6 --------------------
function calculateWordLetters(word){
  word = word.split('');
  const letterCounts = {};
  word.forEach((letter) => {
    if (typeof letter === 'string') {
      if (letterCounts[letter]) {
        letterCounts[letter]++;
      } else {
        letterCounts[letter] = 1;
      }
    }
  });
  return letterCounts;
}
console.log('Function 6 result:');
console.log(calculateWordLetters("тест"));
console.log('--------------------------');