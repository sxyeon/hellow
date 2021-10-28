// func3.js

function multiply(num) {
    // 3단.
    document.write('<table border="1"><tbody>')
    for(let i = 1; i <= 9; i++) {
        document.write('<tr><td>' + num + '</td><td>*</td><td>' + i + '</td><td>=</td><td>' + (num * i) + '</td><tr>');
    }
    document.write('</tbody></table>');

}

multiply(5); // 정의한 구문 호출


function multiplyWithReturn(num) {
    // 3단.
    let str = ''; // 변수 초기화
    str = str + '<table border="1">';
    for(let i = 1; i <= 9; i++) {
       str += '<tr><td>' + num + '</td><td>*</td><td>' + i + '</td><td>=</td><td>' + (num * i) + '</td></tr>'
    }
    str += '</table>'
    return str;
}
let result = multiplyWithReturn(6);
document.write(result);