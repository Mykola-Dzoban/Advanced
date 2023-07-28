export function getRandomArray(length, min, max){
  const randomNumbers = [];
  for(let i = 0; i < length; i++){
    randomNumbers[i] = min < max ? parseInt(Math.random()*(max - min + 1) + min) : parseInt(Math.random()*(min - max + 1) + max);
  }
  return randomNumbers;
}