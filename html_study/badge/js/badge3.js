const promoEl = document.querySelector(".promo-badge");
const closeEl = document.querySelector(".close");
let isClosed = false;// 닫기 눌러있는지 판단변수
let isShow = false;// 지금 보이는 상태인지


window.addEventListener("scroll",
    _.throttle( () => {
        if(isClosed) return;
        if (window.scrollY > 400 && !isShow ) {

          // 보이기: autoAlpha 1
          isShow = true;
          gsap.to(promoEl, { duration: 0.7, scale: 1, autoAlpha: 1, ease:"elastic.out(1,0.5)" });
        } else if( window,screenY <= 400 && isShow ) {
          // 숨기기: autoAlpha 0
          isShow = false;
          gsap.to(promoEl, { duration: 0.4, scale: 0.5, autoAlpha: 0 });
        }
      },  300)
)

closeEl.addEventListener("click", ()=>{
  isClosed = true;
   gsap.to(promoEl, { duration: 0.4, scale: 0.5, autoAlpha: 0 });
  window.scrollTo( { top:0, behavior: "sommth"});
})