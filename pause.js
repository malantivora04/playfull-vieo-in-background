var vid = document.getElementById("vid");
var btn = document.getElementById("btn");

function pause() {
    if (vid.paused) {
      vid.play();
      btn.innerHTML = "Pause";
    } 
    else {
      vid.pause();
      btn.innerHTML = "Play";
    }
  }
