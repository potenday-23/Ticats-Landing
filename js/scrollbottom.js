function scrollToTop() {
    window.scrollTo({top: 5200, behavior: 'smooth'});
}


window.addEventListener('scroll', function () {
    var fixedButton = document.getElementById('shortcut-button');
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (scrollTop > 4800) {
        fixedButton.style.display = 'none';
    } else {
        fixedButton.style.display = 'inline-flex';
    }
});