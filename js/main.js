$(document).ready(function () {
  // Toggle nav
  var $nav_toggle = $('#nav-toggle');
  var $menu = $('#nav-menu');
  $nav_toggle.click(function() {
    $(this).toggleClass('is-active');
    $menu.toggleClass('is-active');
  });

  // Scroll to top button
  $('.scrollToTop').click(function() {
    $('html, body').animate({scrollTop : 0}, 800);
    return false;
  });

  // Toggle search dropdown
  var $search_toggle = $('#search-toggle');
  var $search_dropdown = $('#search-dropdown');

  $search_toggle.click(function() {
    $search_dropdown.toggleClass('is-open');
  });

});
