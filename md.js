function toggleMenu() {
    var navBar = document.querySelector('.bar');

    var currentDisplay = window.getComputedStyle(navBar).getPropertyValue('display');

    if (currentDisplay === 'none') {
        navBar.style.display = 'flex';
    } else {
        navBar.style.display = 'none';
    }

    navBar.classList.toggle('menu-hidden');
    document.body.classList.toggle('menu-open');
}
