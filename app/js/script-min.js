"use strict";document.addEventListener("DOMContentLoaded",function(){}),$(function(){if($("#ArrSlider").attr("id-values")){var s=JSON.parse($("#ArrSlider").attr("id-values")),i=s.length-1,o=1,t=0,r=function(){$("#dormit-third .slick-prev p").html(Object.values(s[i])),$("#dormit-third .slick-next p").html(Object.values(s[o]))};$("#dormit-third .third__slider").on("afterChange",function(e,l,n){t<n?(o=o>=s.length-1?0:o-1,i=0===i?s.length-1:i-1):t>n&&(o=o>=s.length-1?0:o+1,i=0===i?s.length-1:i+1),r(),t=n}),$("#dormit-third .third__slider").on("init",function(){r()})}$(window).on("click",function(s){s.target.classList.contains("act")?($(".nav").toggleClass("active"),console.log("sad")):s.target.classList.contains("not")?console.log("same"):($(".nav").removeClass("active"),console.log("wow"))}),window.addEventListener("scroll",function(){(window.pageYOffset||document.scrollTop)>60?$(".nav").css("top","20px"):$(".nav").css("top","120px"),$(".nav__body").removeClass("active")}),$(".main-second-slider")&&($(".main-second-slider").slick({nextArrow:'<button class="slick-next slick-arrow"><img src="./images/icons/вправо.png" alt="arrow"></button>',prevArrow:'<button class="slick-prev slick-arrow"><img src="./images/icons/left.png" alt="arrow"></button>',infinite:!0,slidesToShow:4,slidesToScroll:4,arrows:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:768,settings:"unslick"}]}),$(".sixth-slider").slick({infinite:!0,slidesToShow:2,slidesToScroll:2,dots:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".seventh-slider").slick({nextArrow:'<button class="slick-next slick-arrow"><img src="./images/icons/вправо.png" alt="arrow"></button>',prevArrow:'<button class="slick-prev slick-arrow"><img src="./images/icons/left.png" alt="arrow"></button>',infinite:!0,slidesToShow:4,slidesToScroll:4,arrows:!0,responsive:[{breakpoint:1200,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:850,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:601,settings:{slidesToShow:1,slidesToScroll:1}}]})),$("#dormit-third")&&$("#dormit-third .third__slider").slick({nextArrow:'<button class="slick-next slick-arrow"><span>Далее:<p>Страхов</p></span><img src="./images/icons/вправо.png" alt="arrow"></button>',prevArrow:'<button class="slick-prev slick-arrow"><img src="./images/icons/left.png" alt="arrow"><span>Назад:<p>Страхов</p></span>    </button>',infinite:!0,slidesToShow:1,slidesToScroll:1,dots:!0}),$("#programs-third")&&$("#programs-third .third__slider").slick({nextArrow:'<button class="slick-next slick-arrow"><img src="./images/icons/вправо.png" alt="arrow"></button>',prevArrow:'<button class="slick-prev slick-arrow"><img src="./images/icons/left.png" alt="arrow"></button>',infinite:!0,slidesToShow:3,slidesToScroll:3,arrows:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:768,settings:"unslick"}]}),$("#stud-third")&&$("#stud-third .third-slider").slick({infinite:!0,slidesToShow:2,slidesToScroll:2,dots:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:1,slidesToScroll:1}}]}),$("#video-third")&&$("#video-third .third-slider").slick({nextArrow:'<button class="slick-next slick-arrow"><img src="./images/icons/вправо.png" alt="arrow"></button>',prevArrow:'<button class="slick-prev slick-arrow"><img src="./images/icons/left.png" alt="arrow"></button>',infinite:!0,slidesToShow:3,slidesToScroll:3,arrows:!0,responsive:[{breakpoint:1200,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}]})});