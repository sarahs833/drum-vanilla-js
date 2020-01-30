// TODO: React to a click on the button!
audio = (e) => {
  console.log(e)
  const key = document.querySelector(`.key[data-key="${e.key}"]`);
  const audio = document.querySelector(`audio[data-key="${e.key}"]`);
  console.log(audio)
  if(audio.paused){
    audio.play();
  }else {
    audio.pause();
  }
  if(!audio) return;
  key.classList.toggle("playing");
}

window.addEventListener("keydown", audio);



