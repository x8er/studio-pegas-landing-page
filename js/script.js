const burgerBtn = $('#burgerBtn'); // get BurgerBtn
const navM = $('.nav_m'); // get mobile nav

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

// scrollToAboutUs
$('.goToAboutUs').on('click', function () {
  $('html, body').animate({
    scrollTop: $('.about-us-container').offset().top
  }, 'slow');
});
// scrollToBarber
$('.goToBarber').on('click', function () {
  $('html, body').animate({
    scrollTop: $('.hereBarber').offset().top
  }, 'slow');
});
// goToEyebrow
$('.goToEyebrow').on('click', function () {
  $('html, body').animate({
    scrollTop: $('.hereEyebrow').offset().top
  }, 'slow');
});
// goToPerMakeup
$('.goToPerMakeup').on('click', function () {
  $('html, body').animate({
    scrollTop: $('.herePerMakeup').offset().top
  }, 'slow');
});
// goToMakeup
$('.goToMakeup').on('click', function () {
  $('html, body').animate({
    scrollTop: $('.hereMakeup').offset().top
  }, 'slow');
});
// goToMakeup
$('.goToTattoo').on('click', function () {
  $('html, body').animate({
    scrollTop: $('.hereTattoo').offset().top
  }, 'slow');
});