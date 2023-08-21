let food = ['햄버거', '돈까스', '칼국수', '김치찌개', '쌀국수'];
let i = Math.floor(Math.random() * 5); //0,0.9999999*5==0,4.99999999
// i 정수로 반환 0,1,2,3,4
console.log(i);
document.write(food[i]);
let bg = ['red', 'blue', 'green', 'pink', 'yellow'];
let j = Math.floor(Math.random() * 5);
//0,1,2,3,4
document.querySelector('body').style.backgroundColor = bg[j];
let n = Math.floor(Math.random() * 6);
document.querySelector('body').style.backgroundImage = 'url(images/photo' + (n + 1) + '.jpg)';
//1,2,3,4,5,6
