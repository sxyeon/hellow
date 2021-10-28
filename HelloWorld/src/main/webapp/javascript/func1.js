// func1.js
console.log('func1.js');

sum(10, 20); // 호이스팅. 함수나 변수가 뒤에 나오더라도 그걸 먼저 프로그램의 첫 부분에서 실행하고 그 다음 실행구문 사용하기 때문에 실행됨
// 자바스크립트에서는 실행구문이 먼저 올 수 있음

function sum(num1, num2) { // num1, num2 -> sum이란 함수 안에서 변수로 쓰여지겠다는 것
    let result = num1 + num2;
    console.log(result);
}


let multi = function(n1, n2) {
    let result = n1 * n2;
    return result;
}

let val = multi(2, 5); // 변수에 담아주는 표현식으로는 호이스팅 불가 / 선언문 다음에 넣어줘야함
console.log(val);
