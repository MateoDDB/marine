document.addEventListener("DOMContentLoaded", function(event) {
  const navbar = document.getElementById('nav');
  window.addEventListener('scroll', function(){
    const ecran = window.scrollY;
    if (ecran > 70) {
      navbar.classList.add('background-black');
    } else {
      navbar.classList.remove('background-black');
    }
  });
}); // Fin du JS
