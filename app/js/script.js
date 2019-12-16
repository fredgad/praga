"use strict";

document.addEventListener("DOMContentLoaded", function () {});
$(function () {
  if ($('#ArrSlider').attr('id-values')) {
    var data = JSON.parse($('#ArrSlider').attr('id-values'));
    var prevPos = data.length - 1,
        nextPos = 1,
        current = 0;

    var setPlace = function setPlace() {
      $('#dormit-third .slick-prev p').html(Object.values(data[prevPos]));
      $('#dormit-third .slick-next p').html(Object.values(data[nextPos]));
    };

    $('#dormit-third .third__slider').on('afterChange', function (e, s, currentSlide) {
      if (current < currentSlide) {
        nextPos = nextPos >= data.length - 1 ? 0 : nextPos - 1;
        prevPos = prevPos === 0 ? data.length - 1 : prevPos - 1;
      } else if (current > currentSlide) {
        nextPos = nextPos >= data.length - 1 ? 0 : nextPos + 1;
        prevPos = prevPos === 0 ? data.length - 1 : prevPos + 1;
      }

      setPlace();
      current = currentSlide;
    });
    $('#dormit-third .third__slider').on('init', function () {
      setPlace();
    });
  }

  $(window).on('click', function (e) {
    //Mobile menu event
    if (e.target.classList.contains('act')) {
      $('.nav').toggleClass('active');
    } else if (e.target.classList.contains('not')) {// do nothing
    } else {
      $('.nav').removeClass('active');
    }
  });
  window.addEventListener('scroll', function () {
    var scrolled = window.pageYOffset || document.scrollTop;

    if ($(window).width() <= 768) {
      // Mobile-menu
      if (scrolled > 60) {
        $('.nav').css('top', '20px');
      } else {
        $('.nav').css('top', '110px');
        console.log(120);
      }
    }

    if ($('#cond-third')[0]) {
      // conditions animation
      if (scrolled > $('#cond-third').offset().top - $(window).height() + 150) {
        (function () {
          var blocks = document.querySelectorAll('#cond-third .third__block');

          var _loop = function _loop(x) {
            setTimeout(function () {
              blocks[x].style.transform = 'scale(1) translateX(0)';
            }, x * 300);
          };

          for (var x = 0; x < 6; x++) {
            _loop(x);
          }
        })();
      }
    }

    $('.nav').removeClass('active'); //remove mobile menu if scroll
  });

  if ($('.main-second-slider')) {
    $('.main-second-slider').slick({
      nextArrow: '<button class="slick-next slick-arrow"><img src="./images/icons/вправо.png" alt="arrow"></button>',
      prevArrow: '<button class="slick-prev slick-arrow"><img src="./images/icons/left.png" alt="arrow"></button>',
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: true,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }, {
        breakpoint: 768,
        settings: "unslick"
      }]
    });
    $('.sixth-slider').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      dots: true,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    });
    $('.seventh-slider').slick({
      nextArrow: '<button class="slick-next slick-arrow"><img src="./images/icons/вправо.png" alt="arrow"></button>',
      prevArrow: '<button class="slick-prev slick-arrow"><img src="./images/icons/left.png" alt="arrow"></button>',
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: true,
      responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }, {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }, {
        breakpoint: 601,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    });
  }

  if ($('#dormit-third')) {
    $('#dormit-third .third__slider').slick({
      nextArrow: '<button class="slick-next slick-arrow"><span>Далее:<p>Страхов</p></span><img src="./images/icons/вправо.png" alt="arrow"></button>',
      prevArrow: '<button class="slick-prev slick-arrow"><img src="./images/icons/left.png" alt="arrow"><span>Назад:<p>Страхов</p></span>    </button>',
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true
    });
  }

  if ($('#programs-third')) {
    $('#programs-third .third__slider').slick({
      nextArrow: '<button class="slick-next slick-arrow"><img src="./images/icons/вправо.png" alt="arrow"></button>',
      prevArrow: '<button class="slick-prev slick-arrow"><img src="./images/icons/left.png" alt="arrow"></button>',
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: true,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }, {
        breakpoint: 768,
        settings: "unslick"
      }]
    });
  }

  if ($('#stud-third')) {
    $('#stud-third .third-slider').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      dots: true,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    });
  }

  if ($('#video-third')) {
    $('#video-third .third-slider').slick({
      nextArrow: '<button class="slick-next slick-arrow"><img src="./images/icons/вправо.png" alt="arrow"></button>',
      prevArrow: '<button class="slick-prev slick-arrow"><img src="./images/icons/left.png" alt="arrow"></button>',
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: true,
      responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    });
  } // Events
  // Array.from(navMenu).map((el) => { // Nav menu slider
  //   el.addEventListener('mouseover', (e) => {
  //     let dataNav = el.getAttribute('data-nav');
  //     botNav.className = dataNav;
  //         if(botNav.classList.contains(el.getAttribute('data-nav'))) {
  //           if(document.querySelectorAll('.colored')[0]) {
  //             document.querySelectorAll('.colored')[0].classList.remove('colored');
  //             console.log('sad')
  //           }
  //           el.classList.add('colored');
  //         } 
  //   });
  // });

});