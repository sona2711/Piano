function playPiano(el){
    let code = el.keyCode;
    const audio = document.querySelector(`audio[data-key = "${code}"]`);
    const key = document.querySelector(`.key[data-key = "${code}"]`);
    
    if (!audio) return;
    audio.play();
    
    key.classList.add("playing");
    audio.currentTime = 0;
}

function removeTransition(el){
    if (el.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll(".key")
keys.forEach(key => key.addEventListener("transitionend", removeTransition));


window.addEventListener('keydown', playPiano )