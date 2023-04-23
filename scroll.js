$(document).ready(function() {
  $('a.nav-link[href^="#"]').on('click', function(event) {
    event.preventDefault();

    const target = this.getAttribute('href');
    const targetPosition = $(target).offset().top - 56;

    $('html, body').animate({
      scrollTop: targetPosition
    }, 1000);
  });

  $(window).scroll(function() {
    if ($(window).scrollTop() > 50) {
      $('nav.navbar').css('padding', '0 1rem');
      $('nav.navbar').css('background-color', '#333');
    } else {
      $('nav.navbar').css('padding', '0.5rem 1rem');
      $('nav.navbar').css('background-color', 'transparent');
    }
  });
});