// func2.js
let str = '<h1>Hello</h1>';
str += '<ul><li>Apple</li><li>Banana</li><li>Cherry</li></ul>';

document.write(str);

let li = document.querySelector('ul>li');
console.log('li');
li.style.color = 'red';
li.style.backgroundColor = 'yellow';
// li.remove(); // apple 사라짐

console.log(this.document.body); // object => {key: value, key1: value1}

let obj = { // key와 value 형식으로 값 지정
    key: 'value',
    key1: 'value1',
    key2: {
        key3: 'value3',
        key4: 'value4',
        key5: {
            key6: 'value6',
            key7: {
                key8: 'value8'
            }
        }
    } 
}
console.log(obj.key2['key5']['key6']); // .연산자로 계속 object의 하위 요소를 가져올 수 있음 / 배열 기호 안에 필드 네임을 넣어줘도 됨
console.log(obj.key2.key5.key6);