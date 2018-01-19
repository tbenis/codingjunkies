/*window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
*/
$(document).ready(function() {

var navPos, winPos, navHeight;

function refreshVar() {
  navPos = $('#navbar').offset().top;
  navHeight = $('#navbar').outerHeight(true);
}

refreshVar();
$(window).resize(refreshVar);

  $('<div class="clone-nav"></div>').insertBefore('#navbar').css('height', navHeight).hide();

$(window).scroll(function() {
  winPos = $(window).scrollTop();

  if (winPos >= navPos) {
    $('#navbar').addClass('fixed shadow');
    $('.clone-nav').show();
  }
  else {
    $('#navbar').removeClass('fixed shadow');
    $('.clone-nav').hide();
  }
});

});
