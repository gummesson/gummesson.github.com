$(document).ready(function () {
  $(".scroll").click(function(event) {    
    event.preventDefault();
      $('body').animate({scrollTop: $(this.hash).offset().top}, 1500);
  });
});