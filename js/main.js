$(document).ready(function () {
  // Toggle function
  var $toggle = $('#nav-toggle');
  var $menu = $('#nav-menu');
  $toggle.click(function() {
    $(this).toggleClass('is-active');
    $menu.toggleClass('is-active');
  });

  // Scroll to top button
  $('.scrollToTop').click(function() {
    $('html, body').animate({scrollTop : 0}, 800);
    return false;
  });
});
