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

$('.reviews-slider').slick({
  variableWidth: true,
  adaptiveHeight: true,
  infinite: false,
  centerMode: true,
  prevArrow: $('.reviews__to-left'),
  nextArrow: $('.reviews__to-right')
});

$('.pics-slider').slick({
  infinite: false,
  arrows: false,
  lazyLoad: 'progressive',
  dots: true
});

$('.programs-slider').slick({
  infinite: false,
  arrows: false,
  variableWidth: true
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
// goToPrograms
$('.goToPrograms').on('click', function () {
  $('html, body').animate({
    scrollTop: $('.herePrograms').offset().top
  }, 'slow');
});
// goToReviews
$('.goToReviews').on('click', function () {
  $('html, body').animate({
    scrollTop: $('.hereReviews').offset().top
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
  if (e.target === $('.blackout')[0]) {
    $('body').css('overflow', 'visible');
    $('.make-review').css('display', 'none');
    $('.blackout').css('display', 'none');
    $('#program-1').css('display', 'none');
    $('#program-2').css('display', 'none');
    $('#program-3').css('display', 'none');
    $('#program-4').css('display', 'none');
    $('#program-5').css('display', 'none');
  }
});
// same like a click on .blackout
$('.program-modal__close').on('click', function () {
  $('.blackout').click();
  $('.programs-slider').css('display', 'none');
});
// close make-review modal
$('.close').on('click', function () {
  $('body').css('overflow', 'visible');
  $('.make-review').css('display', 'none');
  $('.blackout').css('display', 'none');
});
// open make-review modal
$('#showReviewModal').on('click', function () {
  $('body').css('overflow', 'hidden');
  $('.blackout').css('display', 'flex');
  $('.make-review').css('display', 'block');
});

// openProgram-1-5
for (let i = 1; i < 6; i++) {
  $(`#openProgram-${i}`).on('click', function () {
    $('body').css('overflow', 'hidden');
    $('.blackout').css('display', 'flex');
    $(`#program-${i}`).css('display', 'flex');
  });
}
// openProgramMobile-1-5
for (let i = 1; i < 6; i++) {
  $(`#openProgramMobile-${i}`).on('click', function () {
    $('body').css('overflow', 'hidden');
    $('.blackout').css('display', 'flex');
    $(`.programs-slider`).css('display', 'block');
    $(`.programs-slider`).slick('slickGoTo', i-1, true);
  });
}

ymaps.ready(function() {
  var map = new ymaps.Map("map", {
      center: [53.910543, 27.529698],
      zoom: 16
  });

  var myPlacemark = new ymaps.Placemark([53.910543, 27.529698]);

  map.geoObjects.add(myPlacemark);
});