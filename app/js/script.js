"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var mainFirst = document.getElementById('main-first');
});
$(function () {
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
      } // settings: "unslick"
      ]
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
  } // window.addEventListener('scroll', ()=> {
  //     let scrolled = window.pageYOffset || document.scrollTop;
  //     if (scrolled > 150) {
  //       console.log(scrolled)
  //     }
  // });
  // Events
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