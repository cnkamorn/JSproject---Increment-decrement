//DOM element
const minus = document.getElementById('minus'),
num = document.getElementById('num'),
plus = document.getElementById('plus');

let a = 1;

plus.addEventListener('click',function(){
    a++;
    a = a < 10 ? "0" + a : a;
    num.innerText = a;
    console.log(a);}
);


minus.addEventListener('click',function(){
    if (a > 1) {
        a--;
        a = a < 10 ? "0" + a : a;
    num.innerText = a;
    console.log(a);}
    }
);

/*plus.addEventListener('click',function () {
    if (a >= 0) {
    a++;
    if (a > 0 && a <= 9) {
        num.innerText = '0' + a;
    } else if (a == 0 || a >= 10) {
        num.innerText = a;
    };
    console.log(a)
}});

minus.addEventListener('click',function(){
    if (a >= 1) {
    a--;
    if (a > 0 && a < 10) {
        num.innerText = '0' + a;
    } else if (a == 0 || a >= 10) {
        num.innerText = a;
    }
    console.log(a)
}});
*/

