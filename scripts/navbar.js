let isNavbarShown = false;
function toggleNavbar(forceState){
  if(forceState){
    if(forceState === 'show') isNavbarShown = false;
    else isNavbarShown = true;
  }
  const iconElement = document.querySelector('.toggle-navbar>img');
  const navbarLinks = document.querySelector('.navbar-links');

  if(isNavbarShown){
    iconElement.setAttribute('src', 'media/list.svg');
    navbarLinks.setAttribute('data-navbar', 'hidden');
  }
  else{
    iconElement.setAttribute('src', 'media/x.svg');
    navbarLinks.setAttribute('data-navbar', 'shown');
  }

  isNavbarShown = !isNavbarShown;
}

function scrollToElem(elemSelector){
  if(!elemSelector || elemSelector === '.' || elemSelector === '#' || !document.querySelector(elemSelector)) return 'invalid elem selector';
  window.scrollTo({top: document.querySelector(elemSelector).offsetTop, behavior: 'smooth'});
}

document.querySelectorAll('.navbar-links a').forEach((val) => {
  val.addEventListener('click', (event) => {
    event.preventDefault();
    toggleNavbar('hide');
    scrollToElem(val.getAttribute('href'));
  })
})