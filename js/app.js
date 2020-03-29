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

  /*Code for fade in effect for skills, project and contact section*/
  const skillsSection = $('.skills-text');
  const skillsSectionOffset = skillsSection.offset().top;
  const contactSection = $('.contact-container');
  const contactSectionOffset = contactSection.offset().top;
  console.log(skillsSectionOffset);
  console.log(contactSectionOffset);

  $(document).on('scroll', function() {
    let portfolioDocument = $(document);
    console.log(portfolioDocument.scrollTop());

    if(portfolioDocument.scrollTop() > skillsSectionOffset - 500) {
      skillsSection.removeClass('skills-text-hidden');
    }

    if(portfolioDocument.scrollTop() > contactSectionOffset - 985) {
      contactSection.removeClass('contact-container-hidden');
    } 
  });
});