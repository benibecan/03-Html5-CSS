// var header = document.querySelector('header');
// var headerMoving = function (direction) {
//     if (direction === 'up') {
//         header.className = '';
//     } else if (direction === 'down') {
//         header.className = 'scrollDown';
//     }
// };
// var prevScrollTop = 0;
// document.addEventListener('scroll', function () {
//     var nextScrollTop = window.pageYOffset || 0; // pageYOffset -> IE 8 이하 빼고 다 됨.
//     if (nextScrollTop > prevScrollTop) {
//         headerMoving('down');
//     } else if (nextScrollTop < prevScrollTop) {
//         headerMoving('up');
//     }
//     prevScrollTop = nextScrollTop;
// });
// ▲ 스크롤 반응 헤더1 ▲
window.onscroll = function () {
    scrht = document.documentElement.scrollTop;
    if (scrht < 110) {
        document.getElementById('nav').style.top = '0';
        document.getElementById('contents').style.top = '11.5rem';
    } else {
        document.getElementById('nav').style.top = '-11.5rem';
        document.getElementById('contents').style.top = '0px';
    }
};
// ▲ 스크롤 반응 헤더2 ▲
let subMenu = document.querySelectorAll('.submenu');
let sub = document.querySelectorAll('.lnb');
let gnb = document.querySelectorAll('.menu ul li a');
let Lnb = document.querySelectorAll('.lnb');
let ht = Lnb[1].offsetHeight;
console.log('ht : ' + ht);
// for (let i = 0; i < 4; i++) {
//   subMenu[i].style.opacity = "0";
// }
gnb.forEach(function (item, keys) {
    item.addEventListener('mouseenter', function (e) {
        let j = Array.from(gnb).indexOf(e.target);
        function others(item) {
            return item !== j;
        }
        let otherItem = Array.from(subMenu).filter(others);
        otherItem.forEach(function (item) {
            item.style.height = '0px';
            item.style.opacity = '0';
        });
        sub.forEach(function () {
            let subht = sub[j].offsetHeight;
            console.log('subht : ' + subht);
            subMenu[j].style.height = subht + 'px';
            subMenu[j].style.opacity = '1';
        });
    });

    item.addEventListener('mouseleave', function () {
        for (let i = 0; i <= 4; i++) {
            subMenu[i].style.height = 0 + 'px';
        }
    });
});
subMenu.forEach(function (item, keys) {
    item.addEventListener('mouseenter', function (e) {
        let j = Array.from(subMenu).indexOf(e.target);
        sub.forEach(function () {
            let subht = sub[j].offsetHeight;
            console.log('subht : ' + subht);
            subMenu[j].style.height = subht + 'px';
            subMenu[j].style.opacity = '1';
        });
        gnb[j].classList.add('on', 'active');
    });
    item.addEventListener('mouseleave', function (e) {
        for (let i = 0; i <= 4; i++) {
            subMenu[i].style.height = 0 + 'px';
        }
        gnb[keys].classList.remove('on', 'active');
    });
});
// ▲ 메뉴 ▲
