function* createIdGenerator(){
  let count = 0;
  while(true){
    yield ++count;
  }
}

const idGenerator = createIdGenerator();
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);