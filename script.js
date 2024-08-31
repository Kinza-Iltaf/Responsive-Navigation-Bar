$(document).ready(function() {
    // Smooth scrolling for navigation links
    $('.nav-link').click(function(event) {
      if (this.hash !== "") {
        event.preventDefault();
  
        var hash = this.hash;
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function() {
          window.location.hash = hash;
        });
      }
    });
  
    // Toggle navbar on click
    $('.navbar-toggler').click(function() {
      $('.collapse').slideToggle();
    });
  });
  