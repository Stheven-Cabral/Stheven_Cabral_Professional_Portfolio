/*Code to close overlay when 'ENTER' is clicked*/
const introEnterButton = document.getElementById('intro-overlay-enter');
const introOverlay = document.getElementById('intro-overlay');

function overlayOff() {
    introOverlay.style.visibility = "hidden";
    introOverlay.style.opacity = 0.1;
  }

introEnterButton.addEventListener('click', overlayOff);

/*Code to turn on overlay when 'Home' is clicked on the navigation bar*/
const homeNavButton = document.getElementById('home-button');

function overlayOn() {
    introOverlay.style.visibility = "visible";
    introOverlay.style.opacity = 1;
  }

homeNavButton.addEventListener('click', overlayOn);