const wrapper = document.getElementById("wrapper");
const create = document.getElementById("create");
const change = document.getElementById("change");
const reset = document.getElementById("reset");
const WIDTH = "50px";
const HEIGHT = "50px";

const lineWithCode = "0123456789abcdef";

function getRandomColor(str){
  let result = "#";
  for(let i = 0; i < 6; i++){
     result += str[parseInt(Math.random() * str.length)];
  }
  return result;
}

function generateBlocks(){
  wrapper.style.display = "flex";
  wrapper.innerHTML = '';
  for(let i = 0; i < 25; i++){
    const div = document.createElement('div');
    div.style.width = WIDTH;
    div.style.height = HEIGHT;
    div.style.backgroundColor = getRandomColor(lineWithCode);
    wrapper.appendChild(div);
  }
}

function generateBlocksInterval(){
  wrapper.style.display = "flex";
  wrapper.innerHTML = '';
  for(let i = 0; i < 25; i++){
    const div = document.createElement('div');
    div.style.width = WIDTH;
    div.style.height = HEIGHT;
    wrapper.appendChild(div);
    setInterval(function() {
      div.style.backgroundColor = getRandomColor(lineWithCode);
    }, 1000);
  }
}


create.addEventListener("click", ()=>{
  generateBlocks();
})

change.addEventListener("click", ()=>{
  generateBlocksInterval();
})

reset.addEventListener("click", ()=>{
  wrapper.style.display = "none";
  wrapper.innerHTML = '';
})