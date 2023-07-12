const length = document.getElementById('length');
const button = document.querySelector('button');
const clear = document.getElementById('clear');
const h1 = document.querySelector('h1');
const appendResult = document.createElement('p');

function getRandomChinese(length){
  return new Promise((resolve, reject) => {
    if(Number(length.value) < 1 || length.value == ''){
      const error = 'Input number is invalid!';
      reject(error);
    }else{
      let result = '';
      let count = 0;
      const generateChinese = () => {
        result += String.fromCharCode(Date.now()).slice(-5);
        count++;

        count === Number(length.value) ? resolve(result) : setTimeout(generateChinese, 50);
      }

      generateChinese();
    }
  })
}

button.addEventListener('click', () => (
  getRandomChinese(length).then(result => {
  appendResult.innerText = result;
  h1.append(appendResult);
  }).catch(reject => {
    appendResult.innerText = reject;
    h1.append(appendResult);
  }))
);

clear.addEventListener('click',()=>{
  appendResult.remove();
  length.value = '';
})