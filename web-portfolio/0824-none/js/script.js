var header = document.querySelector('header');
var headerMoving = function (direction) {
    if (direction === 'up') {
        header.className = '';
    } else if (direction === 'down') {
        header.className = 'scrollDown';
    }
};
var prevScrollTop = 0;
document.addEventListener('scroll', function () {
    var nextScrollTop = window.pageYOffset || 0; // pageYOffset -> IE 8 이하 빼고 다 됨.
    if (nextScrollTop > prevScrollTop) {
        headerMoving('down');
    } else if (nextScrollTop < prevScrollTop) {
        headerMoving('up');
    }
    prevScrollTop = nextScrollTop;
});
