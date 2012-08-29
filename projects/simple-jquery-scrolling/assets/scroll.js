$(document).ready(function () {
  $(".scroll").click(function(event) {    
    event.preventDefault();
      $('body').animate({scrollTop: $(this.hash).offset().top}, 1500); // 1500 = 1500ms. Change it if you want the scrolling to be faster/slower.
  });
});