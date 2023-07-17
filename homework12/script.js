const characterInfo = document.getElementById('characterInfo');
const info = document.getElementById('info');
const button = document.getElementById('get');
const episode = document.getElementById('episod');
const newEpisode = document.getElementById('newEpisode');
const planets = document.getElementById('planets');
const nextPlanets = document.getElementById('nextPlanets');
const planetsInfo = document.getElementById('planetsInfo');

const BASE_URL = 'https://swapi.dev/api'

const episodes = {
  "1": 4,
  "2": 5,
  "3": 6,
  "4": 1,
  "5": 2,
  "6": 3
}

const charactersPhoto = {}

const generateLinkToPhoto = (obj) => {
  for(let i = 1; i <= 83; i++){
    if(i == 17){
      i++;
    }
    // obj[`https://swapi.dev/api/people/${i}/`] = `./characters/${i}.webp`;
    obj[`https://swapi.dev/api/people/${i}/`] = `./heroes/${i}.png`;
  }
}
generateLinkToPhoto(charactersPhoto);

const getData = (url) => {
  return fetch(`${url}`,
  {
    method: "GET",
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
  }
  });
}
const getCharacterInfo = (characters) => {
  for (const opt of characters) {
    getData(opt).then((response) => {
      return response.json()
    }).then((data) => {
      const newCh = document.createElement("div");
      const chPhoto = document.createElement('img');
      const gender = document.createElement('img');
      const chName = document.createElement('span');
      const chBirth = document.createElement('span');

      newCh.classList.add('new-character');
      chName.classList.add('character-info');
      gender.classList.add('gender');
      
      chPhoto.src = `${charactersPhoto[`${opt}`]}`;
      chName.innerHTML = `<b>Name</b>:<br>${data["name"]}`;
      chBirth.innerHTML = `<b>Birth year</b>:<br>${data["birth_year"]}`;

      if(data["gender"] == 'male'){
        gender.src = './img/male.png';
      }else if(data["gender"] == 'female'){
        gender.src = './img/female.png';
      }else if(data["gender"] == 'none'){
        gender.src = './img/none.png';
      }else{
        gender.src = './img/na.png';
      }

      newCh.append(chPhoto);
      newCh.append(chName);
      newCh.append(chBirth);
      newCh.append(gender);
      characterInfo.append(newCh);
    });
  }
  newEpisode.style.display = "block";
}
/*===================================================== */
const getAllPlanetsInfo = (characters)=>{
  const list = document.createElement('ul');
  for(let i = 0; i < characters.length; i++){
    const planet = document.createElement('li');
    planet.innerText = `${characters[i]["name"]}`;
    list.appendChild(planet);
  }
  planetsInfo.append(list);
}
/*===================================================== */

button.addEventListener('click', () => {
  if(episode.value < 1 || episode.value > 6){
    info.innerText = `Incorrect episode!`;
  }
  else{
    button.style.display = "none";
    episode.style.display = "none";
    planets.style.display = "none";
    const NEW_URL = `${BASE_URL}/films/${episodes[episode.value]}`
    getData(NEW_URL).then((response) => {
      return response.json()
    }).then((data) => {
      
      info.innerText = `Star Wars: Episode: ${data["episode_id"]} - ${data["title"]}`;
      getCharacterInfo(data["characters"]);
    });
  }
});
newEpisode.addEventListener('click', () => {
  episode.value = '';
  planetsInfo.innerHTML = '';
  info.innerText = '';
  characterInfo.innerHTML = '';
  button.style.display = "block";
  episode.style.display = "block";
  planets.style.display = "block";
  newEpisode.style.display = "none";
  nextPlanets.style.display = "none";
});


let planets_url = `${BASE_URL}/planets/`;

planets.addEventListener('click', () => {
  planets.style.display = "none";
  button.style.display = "none";
  episode.style.display = "none";
  nextPlanets.style.display = "block";
  newEpisode.style.display = "block";
  const NEW_URL = `${BASE_URL}/planets/`
  getData(`${NEW_URL}`).then((response) => {
    return response.json()
  }).then((data) => {
    if(data["next"] != null){
      planets_url = `${data["next"]}`
    }else{
      planets_url = `${BASE_URL}/planets/`;
    }
    getAllPlanetsInfo(data["results"]);
  });
});
nextPlanets.addEventListener('click', () => {
  getData(planets_url).then((response) => {
    return response.json()
  }).then((data) => {
    planetsInfo.innerHTML = '';
    if(data["next"] != null){
      planets_url = `${data["next"]}`
    }else{
      planets_url = `${BASE_URL}/planets/`;
    }
    getAllPlanetsInfo(data["results"]);
  });
});