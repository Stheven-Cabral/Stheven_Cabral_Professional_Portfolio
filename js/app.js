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

/*jQuery Code for portfolio effects*/ 
$('document').ready(function() {
  /*Code for smooth scrolling when navigation links are clicked*/
  $('.nav-item-page').click(function(e) {
    let innerHref = $(this).attr('href');
    
    $('html, body').animate({
      scrollTop: $(innerHref).offset().top
    }, 1000);

    e.preventDefault();
  });

  /*Fade in effect code for skills, project and contact section*/
  const skillsSection = $('.skills-text');
  const skillsSectionOffset = skillsSection.offset().top;
  const contactSection = $('.contact-container');
  const contactSectionOffset = contactSection.offset().top;
  const projectSection = $('.projects-section');
  const projectSectionOffset = projectSection.offset().top;

  $(document).on('scroll', function() {
    let portfolioDocument = $(document);

    if(portfolioDocument.scrollTop() > skillsSectionOffset - 500) {
      skillsSection.removeClass('skills-text-hidden');
    }

    if(portfolioDocument.scrollTop() > projectSectionOffset - 500) {
      $('.card').removeClass('card-hidden-left');
    } 

    if(portfolioDocument.scrollTop() > contactSectionOffset - 985) {
      contactSection.removeClass('contact-container-hidden');
    } 
  });
});