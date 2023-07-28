window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader--hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
  });
});
const icons = document.getElementById("icons");
const separate = document.getElementById("separate");
const dateText = document.getElementById('date');

const homeworks = {
  1: {
    hwName: "Змінні та типи",
    githubPagesLink:
      "https://mykola-dzoban.github.io/Advanced/homework1/index.html",
    githubRepoLink:
      "https://github.com/Mykola-Dzoban/Advanced/tree/main/homework1",
  },
  2: {
    hwName: "Цикли і Розгалуження",
    githubPagesLink:
      "https://mykola-dzoban.github.io/Advanced/homework2/index.html",
    githubRepoLink:
      "https://github.com/Mykola-Dzoban/Advanced/tree/main/homework2",
  },
  3: {
    hwName: "Функції",
    githubPagesLink:
      "https://mykola-dzoban.github.io/Advanced/homework3/index.html",
    githubRepoLink:
      "https://github.com/Mykola-Dzoban/Advanced/tree/main/homework3",
  },
  4: {
    hwName: "Масиви",
    githubPagesLink:
      "https://mykola-dzoban.github.io/Advanced/homework4/index.html",
    githubRepoLink:
      "https://github.com/Mykola-Dzoban/Advanced/tree/main/homework4",
  },
  5: {
    hwName: "Перебираючі методи масивів",
    githubPagesLink:
      "https://mykola-dzoban.github.io/Advanced/homework5/index.html",
    githubRepoLink:
      "https://github.com/Mykola-Dzoban/Advanced/tree/main/homework5",
  },
  6: {
    hwName: "Об'єкти. Операції rest та spread",
    githubPagesLink:
      "https://mykola-dzoban.github.io/Advanced/homework6/index.html",
    githubRepoLink:
      "https://github.com/Mykola-Dzoban/Advanced/tree/main/homework6",
  },
  7: {
    hwName: "Функціональне програмування в javascript",
    githubPagesLink:
      "https://mykola-dzoban.github.io/Advanced/homework7/index.html",
    githubRepoLink:
      "https://github.com/Mykola-Dzoban/Advanced/tree/main/homework7",
  },
  8: {
    hwName: "Прототипи. ES6 класи",
    githubPagesLink:
      "https://mykola-dzoban.github.io/Advanced/homework8/index.html",
    githubRepoLink:
      "https://github.com/Mykola-Dzoban/Advanced/tree/main/homework8",
  },
  9: {
    hwName: "DOM",
    githubPagesLink:
      "https://mykola-dzoban.github.io/Advanced/homework9/index.html",
    githubRepoLink:
      "https://github.com/Mykola-Dzoban/Advanced/tree/main/homework9",
  },
  10: {
    hwName: "Події",
    githubPagesLink:
      "https://mykola-dzoban.github.io/Advanced/homework10/index.html",
    githubRepoLink:
      "https://github.com/Mykola-Dzoban/Advanced/tree/main/homework10",
  },
  11: {
    hwName: "Асинхронність та Date. Проміси",
    githubPagesLink:
      "https://mykola-dzoban.github.io/Advanced/homework11/index.html",
    githubRepoLink:
      "https://github.com/Mykola-Dzoban/Advanced/tree/main/homework11",
  },
  12: {
    hwName: "Робота з сервером",
    githubPagesLink:
      "https://mykola-dzoban.github.io/Advanced/homework12/index.html",
    githubRepoLink:
      "https://github.com/Mykola-Dzoban/Advanced/tree/main/homework12",
  },
  13: {
    hwName: "Символи. Генератори. Ітератори",
    githubPagesLink:
      "https://mykola-dzoban.github.io/Advanced/homework13/index.html",
    githubRepoLink:
      "https://github.com/Mykola-Dzoban/Advanced/tree/main/homework13",
  },
  15: {
    hwName: "Інструменти. Модульність коду та Webpack.",
    githubPagesLink:
      "https://mykola-dzoban.github.io/Advanced/homework15/index.html",
    githubRepoLink:
      "https://github.com/Mykola-Dzoban/Advanced/tree/main/homework15",
  }
};

function generateHWIcons(homeworks) {
  const keys = Object.keys(homeworks).map(Number);
  keys.sort((a, b) => b - a);

  for (const key of keys) {
    const hw = homeworks[key];
    const div = document.createElement("div");
    const a = document.createElement("a");

    div.classList.add("homework-icon");
    div.appendChild(a);
    a.href = hw["githubPagesLink"];
    a.innerText = key;
    a.target = "_blank";
    icons.appendChild(div);
  }
}

generateHWIcons(homeworks);

function generateFullHomeworks(homeworks) {
  const keys = Object.keys(homeworks).map(Number); // Перетворюємо ключі об'єкта в масив чисел
  keys.sort((a, b) => b - a); // Сортуємо масив у зворотньому порядку

  for (const key of keys) {
    const hw = homeworks[key];
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const a1 = document.createElement("a");
    const a2 = document.createElement("a");

    div.classList.add("separate-hw");
    div.appendChild(h2);
    div.appendChild(a1);
    div.appendChild(a2);

    h2.innerText = `HW #${key} - ${hw["hwName"]}`;
    a1.href = hw["githubPagesLink"];
    a1.target = "_blank";
    a1.innerText = "Homework page";
    a2.href = hw["githubRepoLink"];
    a2.target = "_blank";
    a2.innerText = "Homework GitHub page";

    separate.appendChild(div);
  }
}
generateFullHomeworks(homeworks);

const days = {
  0:"неділя",
  1:"понеділок",
  2:"вівторок",
  3:"середа",
  4:"четвер",
  5:"п'ятниця",
  6:"субота"
};
const month = {
  0:"січня",
  1:"лютого",
  2:"березня",
  3:"квітня",
  4:"травня",
  5:"червня",
  6:"липня",
  7:"серпня",
  8:"вересня",
  9:"жовтня",
  10:"листопада",
  11:"грудня"
};
const date = new Date();
const fullDate = `${date.getDate()} ${month[date.getMonth()]}, ${days[date.getDay()]}`
dateText.innerText = fullDate;