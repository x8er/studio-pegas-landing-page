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

// scrollToTop
$('.goToTop').on('click', function () {
  $('html, body').animate({
    scrollTop: $('header').offset().top
  }, 'slow');
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
// goToTraining
$('.goToTraining').on('click', function () {
  $('html, body').animate({
    scrollTop: $('.hereTraining').offset().top
  }, 'slow');
});
// goToTrainingPerm
$('.goToTrainingPerm').on('click', function () {
  $('html, body').animate({
    scrollTop: $('.hereTrainingPerm').offset().top
  }, 'slow');
});
// goToGallery
$('.goToGallery').on('click', function () {
  $('html, body').animate({
    scrollTop: $('.hereGallery').offset().top
  }, 'slow');
});
// goToReviews
$('.goToReviews').on('click', function () {
  $('html, body').animate({
    scrollTop: $('.hereReviews').offset().top + 60
  }, 'slow');
});
// goToContacts
$('.goToContacts').on('click', function () {
  $('html, body').animate({
    scrollTop: $('.hereContacts').offset().top
  }, 'slow');
});
// listen click over blackout
$('.blackout').on('click', function (e) {
  if(e.target === $('.blackout')[0]) {
    $('.make-review').css('display', 'none');
    $('.blackout').css('display', 'none');
  }
});
// close make-review modal
$('.close').on('click', function () {
  $('.make-review').css('display', 'none');
  $('.blackout').css('display', 'none');
});
// open make-review modal
$('#showReviewModal').on('click', function () {
  $('.blackout').css('display', 'flex');
  $('.make-review').css('display', 'block');
});

// init slick-sliders if window width more than 900px

if ($(window).width() > 900) {
  $('.big-slider').slick({
    infinite: true,
    arrows: false,
    lazyLoad: 'progressive',
    asNavFor: '#slider-6',
    pauseOnFocus: false,
    pauseOnHover: false,
    swipe: false
  });
  
  $('#slider-6').slick({
    infinite: true,
    prevArrow: $('.controls__to-left'),
    nextArrow: $('.controls__to-right'),
    lazyLoad: 'progressive',
    asNavFor: '#slider-1, #slider-2, #slider-3, #slider-4, #slider-5',
    pauseOnFocus: false,
    pauseOnHover: false,
    swipe: false
  });
} else {
  $('.slider-oim').css('display', 'none');
}

// init reviews-slider
$('.reviews-slider').slick({
  variableWidth: true,
  infinite: false,
  centerMode: true,
  prevArrow: $('.reviews__to-left'),
  nextArrow: $('.reviews__to-right')
});

$('#makeReviewForm').on('submit', function (e) {
  e.preventDefault();
});