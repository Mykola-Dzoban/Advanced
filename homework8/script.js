const university = document.getElementById('university');
const course = document.getElementById('course');
const studentName = document.getElementById('name');
const surname = document.getElementById('surname');
const submit = document.getElementById('submit');
const studentInfo = document.getElementById('studentInfo');
const allStudentInfo = document.getElementById('allStudentInfo');

const submitMark = document.getElementById('submitMark');
const mark = document.getElementById('mark');

const form = document.getElementById('form');
const decanat = document.getElementById('decanat');

const dismiss = document.getElementById('dismiss');
const recover = document.getElementById('recover');

const line = document.getElementById('line');

const isBudget = document.getElementById('isBudget');

class Student{
  constructor(university, course, fullName){
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this._marks = [5, 4, 4, 5];
    this.outOfUni = false;
  }
  getInfo(){
    return `Студент ${this.course}го курсу ${this.university}, ${this.fullName}`;
  }
  get marks(){
    return this.outOfUni ? null : this._marks;
  }
  set newMark(mark){
    this.outOfUni ? null : this._marks.push(mark);
  }
  getAverageMark(){
    return this.outOfUni ? null : Number((this._marks.reduce((prevVal, nextVal) => prevVal += nextVal) / this._marks.length).toFixed(3));
  }
  dismiss(){
    this.outOfUni = true;
  }
  recover(){
    this.outOfUni = false;
  }
}

class BudgetStudent extends Student {
  constructor(university, course, fullName) {
    super(university, course, fullName);

    this.makeScholarship();
  }

  makeScholarship(){
    if (this.getAverageMark() >= 4.0) {
      setInterval(() => console.log(this.getScholarship()), 30000);
      this.scholarship = this.getScholarship();
    }  else if (this.outOfUni) {
      console.log(this.dismissedStudent());
      this.scholarship = this.dismissedStudent();
    }
  }

  getScholarship() {
    return `Ви отримали 1400 грн. стипендії`;
  }

  dismissedStudent() {
    return `Студента виключено. Він не може отримати стипендію!`;
  }
}

let newStudent = null;

function updateStudentInfo() {
  const budgetStudent = isBudget.checked ? 'бюджет' : 'контракт';
  if (!newStudent.outOfUni) {
    studentInfo.innerText = newStudent.getInfo() + `\nОцінки: ${newStudent._marks}`;
    allStudentInfo.innerText = `Студент: ${newStudent.fullName}
    Університет: ${newStudent.university}
    Курс: ${newStudent.course}
    Форма навчання: денна
    Освітній рівень: бакалавр
    Контракт: ${budgetStudent}
    Оцінки: ${newStudent._marks}
    Середній бал: ${newStudent.getAverageMark()}
    Стипендія: ${newStudent.scholarship}`;
  } else {
    studentInfo.innerText = 'Вас виключено. Вас можуть поновити.';
    allStudentInfo.innerText = 'Студента виключено. Ви можете його поновити.';
  }
}

submit.addEventListener("click", function(){
  event.preventDefault();

  if(Number(course.value) < 0){
    Number(course.value) *= -1;

  }else if(Number(course.value) < 1 || Number(course.value) > 6){
    course.value = 1;
  }

  if(isBudget.checked){
    newStudent = new BudgetStudent(university.value, Number(course.value), `${studentName.value} ${surname.value}`);
  }
  else{
    newStudent = new Student(university.value, Number(course.value), `${studentName.value} ${surname.value}`);
    newStudent.scholarship = 'Ви не отримуєте стипендії';
  }

  form.style.display = "none";
  decanat.style.display = "flex";
  line.style.display = "flex";

  updateStudentInfo()
})

submitMark.addEventListener("click", function () {
  event.preventDefault();
  if (Number(mark.value) < 0) {
    Number(mark.value) *= -1;
  } else if (Number(mark.value) < 0 || Number(mark.value) > 5) {
    Number(mark.value) = 0;
  }

  if (Boolean(mark.value)) {
    newStudent.newMark = Number(mark.value);
  }

  if(isBudget.checked){
    if (newStudent.getAverageMark() < 4.0) {
      newStudent.scholarship = `Ви не отримали стипендії`;
      console.log(`Ви не отримали стипендії`);
    } else {
      newStudent.makeScholarship();
    }
  }
  else{
    newStudent.scholarship = 'Ви не отримуєте стипендії';
  }
  

  updateStudentInfo();
});

dismiss.addEventListener("click", function () {
  event.preventDefault();
  newStudent.outOfUni = true;
  updateStudentInfo();
});

recover.addEventListener("click", function(){
  event.preventDefault();
  newStudent.outOfUni = false;
  updateStudentInfo();
})