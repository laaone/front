const swiper = new Swiper(".mainSwiper", {
  loop: true,

  effect: "fade",

  fadeEffect: {
    crossFade: true,
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
