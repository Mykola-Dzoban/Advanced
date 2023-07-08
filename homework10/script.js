function play(event){
  const currentAudio = document.querySelector(`audio[id="${event.keyCode}"]`)
  const key = document.querySelector(`.key[id="${event.keyCode}"]`);
  if(!currentAudio) return;
  currentAudio.currentTime = 0;
  currentAudio.play();
  key.classList.add('played');
}
function removePlayed(event){
  if(event.propertyName !== 'transform') return;
  this.classList.remove('played');
}
const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener('transitionend', removePlayed));
window.addEventListener("keydown", play);