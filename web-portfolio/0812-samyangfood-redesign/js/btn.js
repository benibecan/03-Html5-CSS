// ▼ product클릭 이벤트
/*
let prod = document.querySelectorAll('.product_box>div>div');
for (let i = 0; i < 5; i++) {
    prod[i].style.opacity = '0';
}
prod[0].style.opacity = '1';

let prodMenu = document.querySelectorAll('.product_menu>div>ul');
prodMenu.forEach(function (item, keys) {
    item.onclick = function (e) {
        let j = Array.from('prodMenu').indexOf(e.target);
        console.log(j);
    };
});
*/

/*
.ramenContents ramenBtn
.snackContents snackBtn
.dairyContents dairyBtn
.souceContents souceBtn
.frozenContents frozenBtn
*/
var bDisplay = true;
function doDisplay() {
    var con = document.getElementById('myDIV');
    if (con.style.display == 'none') {
        con.style.display = 'block';
    } else {
        con.style.display = 'none';
    }
}
// ▼ header nav 삼양식품 클릭 이벤트
document.querySelector('.switch_btn__left').addEventListener('click', (c) => {
    window.location = 'https://brand.naver.com/syfoodshop';
});
// ▼ sns클릭 이벤트
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
