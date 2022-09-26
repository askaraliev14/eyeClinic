// CIRCLE WITH TEXT BORDER START
// function revolveText (options = {
// 	target: undefined,
// 	span: 100,
// 	north: 0,
// 	spiral: false
// }) {
// 	const { 
// 		target,
// 		span,
// 		north,
// 		spiral,
// 		size
// 	} = options;
// 	const message = target.textContent;
// 	const quaterWidth = target.clientWidth / 4;
// 	const diameter = size || quaterWidth;
// 	const messageChunks = message.split(String());
// 	const { length } = messageChunks;
// 	const offsetEnd = 1;
// 	const l = length + offsetEnd;
// 	const CIRC_MAX = 360;
// 	const PERC_MAX = 100;
// 	const ofDeg = span * CIRC_MAX / PERC_MAX;
// 	const ofNorth = north * CIRC_MAX / PERC_MAX;
// 	const segDeg = ofDeg / l;
// 	const fontSize = 16;
// 	let a = 0;
// 	let i = 0;

// 	target.setAttribute('style', `
// 		padding-left: ${diameter / 2}px;
// 		display: inline-block;
// 		width: ${diameter / 2}px;
// 		height: ${diameter}px;
// 		transform: rotate3d(0, 0, 1, -${segDeg + ofNorth}deg);
// 		border-radius: 9e9em;
// 		font-size: 12px;
// 	`);
// 	target.classList.add('fx-Revolve');
// 	target.textContent = '';
// 	while (a < ofDeg) {
// 		a += segDeg;
// 		const charWrapper = document.createElement('span');
// 		charWrapper.textContent = messageChunks[i];
// 		i ++;
// 		charWrapper.classList.add('fx-RevolveCharWrap');
// 		charWrapper.setAttribute('style', `
// 			display: inline-block;
// 			transform: 
// 				rotate3d(0, 0, 1, ${a}deg) 
// 				${spiral ? 'translateY(' + (i) + 'px)': ''};
// 			${spiral ? 'font-size:' + (fontSize - (i / 10) ) + 'px': ''};
// 			position: absolute;
// 			height: ${diameter / 2}px;
// 			transform-origin: bottom left;
// 			font-size: 1em;
// 		`);
// 		target.appendChild(charWrapper);
// 	}
// }

// revolveText({
// 	target: document.querySelector('.tar'),
// 	span: 100, // percent
// 	north: 0, // cc rotate in percent
// 	spiral: false,
// 	size:110
// 	});

// CIRCLE WITH TEXT BORDER END


// SWIPER START
var swiper1 = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  loop: true,
  slidesPerGroup: 1,
  paginationClickable: true,
  spaceBetween: 40,
  navigation: {
    nextEl: '.btn-next',
    prevEl: '.btn-prev',
  },
});


var swiper2 = new Swiper(".certificateSwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  loop: true,
  slidesPerGroup: 1,
  paginationClickable: true,
  spaceBetween: 40,
  pagination: {
    el: ".cert-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".arrow-right",
    prevEl: ".arrow-left",
  },
});

var swiper3 = new Swiper(".licenseSwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  loop: true,
  slidesPerView: 5,
  spaceBetween: 10,
  navigation: {
    nextEl: ".license-right",
    prevEl: ".license-left",
  },
});
var swiper4 = new Swiper(".licenseSwiper2", {
  slidesPerView: "auto",
  centeredSlides: true,
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
  navigation: {
    nextEl: ".license-right",
    prevEl: ".license-left",
  },
});
var swiper5 = new Swiper(".reviewSlider", {
  slidesPerView: 4,
  spaceBetween: 16,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  },
  scrollbar: {
    el: ".review-scroll",
    hide: true,
  },
  navigation: {
    nextEl: ".review-next",
    prevEl: ".review-prev",
  }
});
var swiper = new Swiper(".aboutSwiper", {
  loop: true,
  navigation: {
    nextEl: ".about-next",
    prevEl: ".about-prev",
  },
});
var swiper = new Swiper(".thumbSlider", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".thumbSlider2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".thumb-next",
    prevEl: ".thumb-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});
// var swiper6 = new Swiper(".aboutSwiper", {
//   loop: true,
//   spaceBetween: 10,
//   slidesPerView: 4,
//   freeMode: true,
//   watchSlidesProgress: true,
// });
// var swiper7 = new Swiper(".aboutSwiper2", {
//   loop: true,
//   spaceBetween: 10,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   thumbs: {
//     swiper: swiper,
//   },
// });
// SWIPER END
// Accordion
$(function () {
  // (Optional) Active an item if it has the class "is-active"	
  $(".accordion > .accordion-item.is-active").children(".accordion-panel").slideDown();

  $(".accordion > .accordion-item").click(function () {
    // Cancel the siblings
    $(this).siblings(".accordion-item").removeClass("is-active").children(".accordion-panel").slideUp();
    // Toggle the item
    $(this).toggleClass("is-active").children(".accordion-panel").slideToggle("ease-out");
  });
});

$('.price-accordion__head').click(function () {
  $(this).toggleClass('active');
  $(this).parent().find('.price-accordion__arrow').toggleClass('price-accordion__arrow-animate');
  $(this).parent().find('.price-accordion__content').slideToggle(280);
});

// var myNav = document.getElementsByClassName('.header-navigation');
// window.onscroll = function () {
//   if (document.body.scrollTop >= 200) {
//     myNav.classList.add(".header-border");
//     // myNav.classList.remove("header-border");
//   } else {
//     // myNav.classList.add("header-border");
//     myNav.classList.remove(".header-border");
//   }
// };

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 200) {
    $(".header-navigation").addClass("header-border");
  } else {
    $(".header-navigation").removeClass("header-border");
  }
});
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 100) {
    $(".mobile-logo").addClass("active-header");
  } else {
    $(".mobile-logo").removeClass("active-header");
  }
});
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 100) {
    $(".header-map").addClass("disabled-header");
  } else {
    $(".header-map").removeClass("disabled-header");
  }
});
// $(window).scroll(function () {
//   if ( $(this).scrollTop() > 200 && !$('header').hasClass('active-header') ) {
//     $('header-logo').addClass('active-header');
//     $('header-logo').slideDown();
//    } else if ( $(this).scrollTop() <= 200 ) {
//     $('header-logo').removeClass('active-header');
//     $('header-logo').slideUp();
//   }
// });
// $(window).scroll(function () {
//   var scroll = $(window).scrollTop();

//   if (scroll >= 200) {
//     $(".header").addClass("active-header");
//   }
// });

$(".menu__mobile_button").click(function () {
  $(this).toggleClass('active');
  $("ul.header-navigation__nav li").slideToggle('smooth');
})
$(".menu__mobile_button").click(function () {
  $('.mobile-logo').toggleClass('display-none').delay(800);
})
$(".menu__mobile_button").click(function () {
  $('.header-map').toggleClass('display-none').delay(800);
})
$(window).resize(function () {
  if ($(window).width() > 650) {
    $('ul.header-navigation__nav li').removeAttr('style');
  }
})
if ($(".menu__mobile_button").hasClass("active")) {
  $(this).find('.mobile-logo').addClass('display-none');
}
(function () {
  "use strict";

  const backdrop = document.querySelector('#modal-backdrop');
  document.addEventListener('click', modalHandler);

  function modalHandler(evt) {
    const modalBtnOpen = evt.target.closest('.js-modal');
    if (modalBtnOpen) { // open btn click
      const modalSelector = modalBtnOpen.dataset.modal;
      showModal(document.querySelector(modalSelector));
    }

    const modalBtnClose = evt.target.closest('.modal-close');
    if (modalBtnClose) { // close btn click
      evt.preventDefault();
      hideModal(modalBtnClose.closest('.modal-window'));
    }

    if (evt.target.matches('#modal-backdrop')) { // backdrop click
      hideModal(document.querySelector('.modal-window.show'));
    }
  }

  function showModal(modalElem) {
    modalElem.classList.add('show');
    backdrop.classList.remove('hidden');
  }

  function hideModal(modalElem) {
    modalElem.classList.remove('show');
    backdrop.classList.add('hidden');
  }
})();
const modal = document.querySelector("modal-window");
const body = document.querySelector("body");

const showModal = function (e) {
  modal.classList.toggle("show");

  if (!modal.classList.contains("show")) {
    // Disable scroll
    body.style.overflow = "hidden";
  } else {
    // Enable scroll
    body.style.overflow = "auto";
  }
};

$(".js-modal").click(function () {
  $('body').addClass('modal-open');
})
$(".js-modal").click(function () {
  $('.mySwiper').addClass('display-none');
})
$(".modal-close").click(function () {
  $('body').removeClass('modal-open');
})
$(".modal-close").click(function () {
  $('.mySwiper').removeClass('display-none');
})
// if ($("#modal_1").hasClass("show")) {
//   $("body").addClass("modal-open");
// }
// $(".modal-window").each(function () {
//   if ($(this).hasClass('show')) {
//     $('body').addClass('modal-open');
//   }
// });
// $("#modal_1").on("show", function () {
//   $('body').addClass("modal-open");
// });
// $(document).ready(function () {
//   if ($("#modal_1").hasClass("show")) {}
// });
// $(".modal-window").on("show", function () {
//   $('body').addClass("modal-open");
// })


// $("#modal_2").on("show", function () {
//   $("body").addClass("modal-open");
// }).on("hidden", function () {
//   $("body").removeClass("modal-open")
// });
// var modal2 = false;
// $('#modal_1').on('hidden.bs.modal', function () {
//   if (modal2) {
//     $('#modal_2').modal('show');
//     modal2 = false;
//   }
// });

// $("#modal_2").click(function () {
//   $('#modal_1').modal('hide');
//   modal2 = true;
// });
// function activeModal {
//   const modalOne = document.querySelector('#modal_1');
//   const modalTwo = document.querySelector('#modal_2');
//   if (modalOne )
// }