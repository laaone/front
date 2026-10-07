const swiper = new Swiper('.mySwiper', {
       loop: true,
       autoplay: {
        delay: 2000,
       },
       effect: 'fade',
       fadeEffect: {
           crossFade: true
       },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
         
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          },
        },
      });