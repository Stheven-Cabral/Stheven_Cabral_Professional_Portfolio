/*Code to close overlay when 'ENTER' is clicked*/
const introEnterButton = document.getElementById('intro-overlay-enter');
const introOverlay = document.getElementById('intro-overlay');
const navBar = document.getElementById('nav-bar');

function overlayOff() {
  introOverlay.style.opacity = 0.1;
  introOverlay.style.visibility = "hidden";
  navBar.style.opacity = 1;
  navBar.style.visibility = "visible";
}

introEnterButton.addEventListener('click', overlayOff);

/*Code to turn on overlay when 'Home' is clicked on the navigation bar*/
const homeNavButton = document.getElementById('home-button');

function overlayOn() {
  introOverlay.style.opacity = 1;
  introOverlay.style.visibility = "visible";
  navBar.style.opacity = 0.1;
  navBar.style.visibility = "hidden";
}

homeNavButton.addEventListener('click', overlayOn);