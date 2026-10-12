const badgeEl = document.querySelector("header .badges");

window.addEventListener("scroll",
    _.throttle( () => {
        if (window.scrollY > 500) {
          // 숨기기: 오른쪽으로 120px 이동 + 투명
          gsap.to(badgeEl, { duration: 0.6, x: 120, autoAlpha: 0 });
        } else {
          // 보이기: 원래 위치로
          gsap.to(badgeEl, { duration: 0.6, x: 0, autoAlpha: 1 });
        }
      },  300)
)