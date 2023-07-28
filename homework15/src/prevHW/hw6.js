export function getSubjects(student){
  const studentSubjects = [];
  for(let opt in student.subjects){
    opt = opt.replaceAll('_', ' ');
    opt = opt.split('');
    opt[0] = opt[0].toUpperCase();
    studentSubjects.push(opt.join(''));
  }
  return studentSubjects;
}
