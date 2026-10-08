const tabsEl = document.querySelectorAll('.tab')
const contentsEl = document.querySelectorAll('.content');

tabsEl.forEach( function( tab, index) {

    tab.addEventListener("click", function(){

        tabsEl.forEach(function(tab){
        tab.classList.remove("active");
    });

    contentsEl.forEach( function(content) {
         content.classList.remove('active');
    });

    this.classList.add('active');
    contentsEl[index].classList.add('active');


 });

});