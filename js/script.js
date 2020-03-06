const burgerBtn = $('#burgerBtn'); // get BurgerBtn
const navM = $('.nav_m');

$('header').mousemove(function (e) { 
  if (navM.hasClass('nav_m-show') && ($(e.target)[0] !== navM[0])) {
    navM.removeClass('nav_m-show');
    $('body').css('overflow-y', 'visible');
  }
});

burgerBtn.on('click', function () {
  $('body').css('overflow-y', 'hidden');
  navM.addClass('nav_m-show');
});