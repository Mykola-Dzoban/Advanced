const testText = document.getElementById('testText');
const up = document.getElementById('up');
const down = document.getElementById('down');
const reset = document.getElementById('reset');

const genId = document.getElementById('genId');
const randomId = document.getElementById('randomId');

function* createIdGenerator() {
  let count = 1;
  while (true) {
    const direction = yield count;
    if (direction === "reset") {
      count = 0;
    } else {
      ++count;
    }
  }
}

const idGenerator = createIdGenerator();

genId.addEventListener('click', () => {
  let id = idGenerator.next().value;
  randomId.innerText = id;
});



function* fontGenerator(startValue) {
  let fontSize = startValue;
  while (true) {
    const direction = yield fontSize;
    if (direction === "up") {
      fontSize += 2;
    } else if (direction === "down") {
      if (fontSize <= 0) {
        fontSize = startValue;
      } else {
        fontSize -= 2;
      }
    } else if (direction === "reset") {
      fontSize = startValue;
    }
  }
}

const generator = fontGenerator(14);
generator.next();

let fontSize = generator.next().value;
testText.style.fontSize = `${fontSize}px`;

up.addEventListener('click', () => {
  fontSize = generator.next("up").value;
  testText.style.fontSize = `${fontSize}px`;
});

down.addEventListener('click', () => {
  fontSize = generator.next("down").value;
  testText.style.fontSize = `${fontSize}px`;
});

reset.addEventListener('click', () => {
  fontSize = generator.next("reset").value;
  idGenerator.next("reset");
  testText.style.fontSize = `${fontSize}px`;
  randomId.innerText = '';
});
