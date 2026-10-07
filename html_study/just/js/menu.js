const liEls = document.querySelectorAll('.main>li');

liEls.forEach(function(liEl) {

    const subMenu = liEl.querySelector('.sub');

    liEl.addEventListener('mouseenter', function() {
        subMenu.style.display = 'block';
    });

    liEl.addEventListener('mouseleave', function() {
        subMenu.style.display = 'none';
    });

});