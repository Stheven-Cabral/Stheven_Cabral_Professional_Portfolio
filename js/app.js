/*Code to close overlay when 'ENTER' is clicked*/
const introEnterButton = document.getElementById('intro-overlay-enter');
const introOverlay = document.getElementById('intro-overlay');

function overlayOff() {
    console.log('hello');
    introOverlay.style.visibility = "hidden";
    introOverlay.style.opacity = 0.1;
  }

introEnterButton.addEventListener('click', overlayOff);