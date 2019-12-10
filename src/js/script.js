document.addEventListener("DOMContentLoaded", ()=> {



})
         


$(function() {

// window.addEventListener('scroll', ()=> {
//     let scrolled = window.pageYOffset || document.scrollTop;
//     if (scrolled > 150) {
//       console.log(scrolled)
//     }
// });


if($('.main-second-slider')) {
  $('.main-second-slider').slick({
    nextArrow: '<button class="slick-next slick-arrow"><img src="./images/icons/вправо.png" alt="arrow"></button>',
    prevArrow: '<button class="slick-prev slick-arrow"><img src="./images/icons/left.png" alt="arrow"></button>',
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3, 
        }
      },
      {
        breakpoint: 768,
        settings: "unslick"
      }
    ]
  });

  $('.sixth-slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1, 
        }
      }
    ]
  });

  $('.seventh-slider').slick({
    nextArrow: '<button class="slick-next slick-arrow"><img src="./images/icons/вправо.png" alt="arrow"></button>',
    prevArrow: '<button class="slick-prev slick-arrow"><img src="./images/icons/left.png" alt="arrow"></button>',
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3, 
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2, 
        }
      },
      {
        breakpoint: 601, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,  
        }
      }
    ]
  });
}

if($('#dormit-third')) {
  $('#dormit-third .third__slider').slick({
    nextArrow: '<button class="slick-next slick-arrow"><span>Далее:<p>Страхов</p></span><img src="./images/icons/вправо.png" alt="arrow"></button>',
    prevArrow: '<button class="slick-prev slick-arrow"><img src="./images/icons/left.png" alt="arrow"><span>Назад:<p>Страхов</p></span>    </button>',
    infinite: true,  
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true
  });
}

if($('#programs-third')) {
  $('#programs-third .third__slider').slick({
    nextArrow: '<button class="slick-next slick-arrow"><img src="./images/icons/вправо.png" alt="arrow"></button>',
    prevArrow: '<button class="slick-prev slick-arrow"><img src="./images/icons/left.png" alt="arrow"></button>',
    infinite: true,  
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2, 
        }
      },
      {
        breakpoint: 768,
        settings: "unslick"
      }
    ]
  });
}

if($('#stud-third')) {
  $('#stud-third .third-slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1, 
        }
      }
    ]
  });
}


if($('#video-third')) {
  $('#video-third .third-slider').slick({
    nextArrow: '<button class="slick-next slick-arrow"><img src="./images/icons/вправо.png" alt="arrow"></button>',
    prevArrow: '<button class="slick-prev slick-arrow"><img src="./images/icons/left.png" alt="arrow"></button>',
    infinite: true,  
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2, 
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1, 
        }
      }
    ]
  });
}





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




