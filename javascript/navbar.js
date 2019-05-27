document.addEventListener("DOMContentLoaded", function(event) {
  const navbar = document.getElementById('nav');
  window.addEventListener('scroll', function(){
    const ecran = window.scrollY;
    console.log(ecran)
    if (ecran > 70) {
      navbar.classList.add('background-black');
    } else {
      navbar.classList.remove('background-black');
    }
  });
  const navbarResponsive = document.querySelector('.nav');
  const btnNavbar = document.getElementById('btn-navbar-responsive');

  btnNavbar.addEventListener('click', function(){
    if (navbarResponsive.classList.contains("active-responsive")){
      navbarResponsive.classList.remove('active-responsive');
    } else {
      navbarResponsive.classList.add('active-responsive');
    }

  });
}); // Fin du JS
