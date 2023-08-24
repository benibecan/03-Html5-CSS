let prod = document.querySelectorAll('.product_box>div>div');

for (let i = 0; i < 5; i++) {
    prod[i].style.opacity = '0';
}
prod[0].style.opacity = '1';

let prodMenu = document.querySelectorAll('.product_icon a');
prodMenu.forEach(function (item, keys) {
    console.log('item :' + item + '\n' + 'keys : ' + keys);
    item.onclick = function (e) {
        let j = Array.from(prodMenu).indexOf(e.target);
        console.log(j);
        function others(item) {
            return item !== j;
        }
        let otherItems = Array.from(prod).filter(others);
        otherItems.forEach(function (item) {
            item.style.opacity = '0';
        });
        prod[j].style.opacity = '1';
    };
});
// ▲ product클릭 이벤트

document.querySelector('.switch_btn__left').addEventListener('click', (c) => {
    window.location = 'https://brand.naver.com/syfoodshop';
});
// ▲ header nav 삼양식품 클릭 이벤트

document.querySelector('.sns_1').addEventListener('click', (c) => {
    window.location = 'https://blog.naver.com/samyangfoods';
});
document.querySelector('.sns_2').addEventListener('click', (c) => {
    window.location = 'https://www.instagram.com/samyangfoods/';
});
document.querySelector('.sns_3').addEventListener('click', (c) => {
    window.location = 'https://www.facebook.com/samyangfoods';
});
document.querySelector('.sns_4').addEventListener('click', (c) => {
    window.location = 'https://twitter.com/i/flow/login?redirect_after_login=%2Fsamyangfoods';
});
// ▲ sns클릭 이벤트
// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5; // 동작의 구현이 시작되는 위치
var navbarHeight = $('header').outerHeight();
// 영향을 받을 요소를 선택

// 스크롤시에 사용자가 스크롤했다는 것을 알림
$(window).scroll(function (event) {
    didScroll = true;
});

// hasScrolled()를 실행하고 didScroll 상태를 재설정
setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

// 동작을 구현
function hasScrolled() {
    // 접근하기 쉽게 현재 스크롤의 위치를 저장한다.
    var st = $(this).scrollTop();

    // 설정한 delta 값보다 더 스크롤되었는지를 확인한다.
    if (Math.abs(lastScrollTop - st) <= delta) {
        return;
    }

    // 헤더의 높이보다 더 스크롤되었는지 확인하고 스크롤의 방향이 위인지 아래인지를 확인한다.
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }

    // lastScrollTop 에 현재 스크롤위치를 지정한다.
    lastScrollTop = st;
}

/* 추가로 웹페이지의 스크롤을 내렸을때를 감지해 코드를 실행시키는 함수입니다.
$(window).scroll(function(){ 
   if($(window).scrollTop() == $(document).height() - $(window).height()){ 
      // 실행할 함수
   } 
});
*/
// ▲ header nav 스크롤 이벤트
