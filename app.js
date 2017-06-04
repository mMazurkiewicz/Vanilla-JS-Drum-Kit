document.addEventListener("DOMContentLoaded", function(event) {
    function playSound(e) {
      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
      const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

      // stop the function
      if(!audio) return;

      audio.currentTime = 0 //stop playing a sound
      audio.play();

      // animation
      key.classList.add('playing');
    }
    function removeTransition(e) {
      if (e.propertyName !== 'transform') return // skip
      this.classList.remove('playing');
    }
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition))
    window.addEventListener("keydown", playSound);
  });
