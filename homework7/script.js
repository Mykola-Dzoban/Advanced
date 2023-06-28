const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

function getMyTaxes(salary){
  return salary - salary * this.tax;
}
function getMiddleTaxes(){
  return this.tax * this.middleSalary;
}
function getTotalTaxes(){
  return this.tax * this.middleSalary * this.vacancies;
}
function getMySalary(){
  const salary = +(Math.random()*(2000 - 1500 + 1) + 1500).toFixed(3);
  const taxes = +(salary * this.tax).toFixed(3);
  const profit = +(salary - taxes).toFixed(3);
  setInterval(()=>{
    console.log({
      salary,
      taxes,
      profit
    });
  }, 10000);
}
const myTaxes = getMyTaxes.call(ukraine, 1542);
console.log(myTaxes);
const middleTaxes = getMiddleTaxes.call(latvia);
console.log(middleTaxes);
const totalTaxes = getTotalTaxes.call(litva);
console.log(totalTaxes);
getMySalary.bind(ukraine)();