// TODO: React to a click on the button!
const keys = document.querySelector('.keys')
window.addEventListener("keydown", function(e){
  console.log(e)
  const key = document.querySelector(`.key[data-key="${e.key}"]`);
  const audio = document.querySelector(`audio[data-key="${e.key}"]`);
  console.log(audio)
  if(!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.toggle("playing");
});

