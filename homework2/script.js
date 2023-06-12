let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let check = document.getElementById('check');//check.checked
let button = document.getElementById('submit');
let resetButton = document.getElementById('reset');
let result = document.getElementById('result');

function calculation(){
  let resultNumber = 0;
  result.innerText = '';
  let firstNumber = parseInt(num1.value);
  let secondNumber = parseInt(num2.value);
  console.log(firstNumber);
  console.log(isNaN(firstNumber));
  if(isNaN(firstNumber) || isNaN(secondNumber)){
    result.innerText = 'Please enter correct numbers';
  }else{
    for(let i = firstNumber; i <= secondNumber; i++){
      if(check.checked && i % 2 === 0){
        continue;
      }
      resultNumber += i;
    }
    result.innerText = `Result: ${resultNumber}`;
  }
}

function reset(){
  num1.value = '';
  num2.value = '';
  result.innerText = '';
  check.checked = false;
}

button.addEventListener('click', function(){
  calculation();
});
resetButton.addEventListener('click', function(){
  reset();
});
