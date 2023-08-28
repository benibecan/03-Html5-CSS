window.onscroll = function () {
    scrht = document.documentElement.scrollTop;
    if (scrht < 11) {
        document.getElementById('nav').style.top = '0';
        document.getElementById('contents').style.top = '11.5rem';
    } else {
        document.getElementById('nav').style.top = '-11.5rem';
        document.getElementById('contents').style.top = '0';
    }
};
// ▲ 스크롤 반응 헤더 ▲
let subMenu = document.querySelectorAll('.submenu');
let sub = document.querySelectorAll('.lnb');
let gnb = document.querySelectorAll('.menu ul li a');
let Lnb = document.querySelectorAll('.lnb');
let ht = Lnb[1].offsetHeight;
console.log('rem : ' + ht);
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
            item.style.height = '0';
            item.style.opacity = '0';
        });
        sub.forEach(function () {
            let subht = sub[j].offsetHeight;
            console.log('subht : ' + subht);
            subMenu[j].style.height = subht + 'rem';
            subMenu[j].style.opacity = '1';
        });
    });

    item.addEventListener('mouseleave', function () {
        for (let i = 0; i <= 4; i++) {
            subMenu[i].style.height = 0 + 'rem';
        }
    });
});
subMenu.forEach(function (item, keys) {
    item.addEventListener('mouseenter', function (e) {
        let j = Array.from(subMenu).indexOf(e.target);
        sub.forEach(function () {
            let subht = sub[j].offsetHeight;
            console.log('subht : ' + subht);
            subMenu[j].style.height = subht + 'rem';
            subMenu[j].style.opacity = '1';
        });
        gnb[j].classList.add('on', 'active');
    });
    item.addEventListener('mouseleave', function (e) {
        for (let i = 0; i <= 4; i++) {
            subMenu[i].style.height = 0 + 'rem';
        }
        gnb[keys].classList.remove('on', 'active');
    });
});
// ▲ 메뉴 ▲
let slideani = document.getElementById('slideShow');
let slides = document.querySelector('.slides');
let slideImg = document.querySelectorAll('.slides li');
let dots = document.querySelectorAll('.dot');
let currentIdx = 0; //인덱스 번호 초기값?.?...
let slideCount = slideImg.length;
dots[0].className += ' act';
let prev = document.querySelector('.prev'); //이전 버튼
let next = document.querySelector('.next'); //다음 버튼
let slideWidth = 100; //슬라이드이미지 넓이
makeClone(); // 처음이미지와 마지막 이미지 복사 함수
initfunction(); //슬라이드 넓이와 위치값 초기화 함수
function makeClone() {
    let cloneSlide_first = slideImg[0].cloneNode(true);
    let cloneSlide_last = slides.lastElementChild.cloneNode(true);
    slides.append(cloneSlide_first); //선택한 요소를 마지막 배치
    slides.insertBefore(cloneSlide_last, slides.firstElementChild); //선택한 요소를 첫번째로?.?..
}
function initfunction() {
    slides.style.width = slideWidth * (slideCount + 2) + 'rem';
    slides.style.left = -slideWidth + 'rem';
}
function showSlide(n) {
    for (i = 0; i < slideImg.length; i++) {
        dots[i].className = dots[i].className.replace(' act', '');
    }
    dots[n].className += ' act';
    slides.style.left = -(n + 1) * slideWidth + 'rem';
    slides.style.transition = '0.5s';
}
function currentSlide(n) {
    showSlide((currentIdx = n));
}
next.onclick = function () {
    if (currentIdx <= slideCount - 1) {
        //슬라이드이동
        slides.style.left = -(currentIdx + 2) * slideWidth + 'rem';
        slides.style.transition = '0.5s';
    }
    if (currentIdx === slideCount - 1) {
        //마지막 슬라이드 일때
        setTimeout(function () {
            //0.5초동안 복사한 첫번째 이미지에서, 진짜 첫번째 위치로 이동
            slides.style.left = -slideWidth + 'rem';
            slides.style.transition = '0s';
        }, 500);
        currentIdx = -1;
    }
    currentIdx += 1;
    for (i = 0; i < slideImg.length; i++) {
        dots[i].className = dots[i].className.replace(' act', '');
    }
    dots[currentIdx].className += ' act';
};
prev.onclick = function () {
    //이전 버튼 눌렀을때
    console.log(currentIdx);
    if (currentIdx >= 0) {
        slides.style.left = -currentIdx * slideWidth + 'rem';
        slides.style.transition = '0.5s';
    }
    if (currentIdx === 0) {
        setTimeout(function () {
            slides.style.left = -slideCount * slideWidth + 'rem';
            slides.style.transition = '0s';
        }, 500);
        currentIdx = slideCount;
    }
    currentIdx -= 1;
    for (i = 0; i < slideImg.length; i++) {
        dots[i].className = dots[i].className.replace(' act', '');
    }
    dots[currentIdx].className += ' act';
};
let interval = setInterval(function () {
    next.onclick();
}, 2000);
function slide_stop() {
    clearInterval(interval);
}
function slide_start() {
    interval = setInterval(function () {
        next.onclick();
    }, 2000);
}
slideani.addEventListener('mouseenter', function () {
    slide_stop();
});
slideani.addEventListener('mouseleave', function () {
    slide_start();
});
// ▲ 슬라이드 ▲
