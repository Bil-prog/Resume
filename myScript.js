const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li')

  burger.addEventListener('click',()=> {
  //toggle nav    
      nav.classList.toggle('nav-active');
  //burger animation
  burger.classList.toggle('toggle');    
  });
  //animating links
  navLinks.forEach((link, index) => {
      link.style.animation = 'navLinkFade 0.5s ease forwards';
  });
}
navSlide();


