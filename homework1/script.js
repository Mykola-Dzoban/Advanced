const bread = 15.678;
const salmon = 123.965;
const steak = 90.2345;

console.log(bread);
console.log(salmon);
console.log(steak);

let products = [bread, salmon, steak];
let max = Math.max(...products);
let min = Math.min(...products);
console.log(max);
console.log(min);

let sumOfProducts = bread + salmon + steak;

console.log(sumOfProducts);

let sumOfProducts2 = Math.trunc(bread) + Math.trunc(salmon) + Math.trunc(steak);

console.log(sumOfProducts2);

let roundSum = Math.round(sumOfProducts/100)*100;

console.log(roundSum);

let floorSum = Math.floor(sumOfProducts);
console.log(floorSum);
let isOdd = (floorSum%2)==0 ? true : false;
console.log(isOdd);

let rest = 500 - sumOfProducts;

console.log(rest);

function average(array){
  let sum = 0;
  for(let i=0; i < array.length; i++){
    sum += array[i];
  }
  return sum / array.length;
}
let averageOfPrices = Number(average(products).toFixed(2));
console.log(averageOfPrices);

let discount = (Math.random()*50)/100;
console.log(discount);

let sumWithDiscount = sumOfProducts - sumOfProducts*discount;
console.log(sumWithDiscount);
let roundToTwoAfterPoint = Number(sumWithDiscount.toFixed(2));
console.log(roundToTwoAfterPoint);

let netProfit = sumOfProducts/2-sumOfProducts*discount;

console.log(netProfit);

let stringOfAll = `
Max price: ${max}
Min price: ${min}
Sum of products: ${sumOfProducts}
Without a penny: ${sumOfProducts2}
Round sum: ${roundSum}
Sum is even: ${isOdd}
Rest from 500: ${rest}
Average of prices: ${averageOfPrices}
Discount: ${discount}
Sum with discount: ${sumWithDiscount}
Sum with discount rounded to 2 after point: ${roundToTwoAfterPoint}
Net profit: ${netProfit}
`;
console.log(stringOfAll);
