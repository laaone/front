const liEls = document.querySelectorAll('.menuItem');

liEls.forEach(function(liEl) {

    const subMenu = liEl.querySelector('.subMenu');

    liEl.addEventListener('mouseenter', function() {
        subMenu.style.display = 'block';
    });

    liEl.addEventListener('mouseleave', function() {
        subMenu.style.display = 'none';
    });

});

