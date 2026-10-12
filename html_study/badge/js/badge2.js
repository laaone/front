const toTopEl = document.querySelector("#to-top");

window.addEventListener("scroll",
    _.throttle( () => {
        if (window.scrollY > 300) {
          // 보이기: autoAlpha 1
          gsap.to(toTopEl, { duration: 0.6, y: 0, autoAlpha: 1, ease:"back.out(5.7)" });
        } else {
          // 숨기기: autoAlpha 0
          gsap.to(toTopEl, { duration: 0.6, y: 40, autoAlpha: 0 });
        }
      },  300)
)

toTopEl.addEventListener("click", ()=>{
  window.scrollTo( { top:0, behavior: "sommth"});
})