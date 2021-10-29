// array2
const numbers = [3, 34, 28, 12, 5];

let sum = 0;

numbers.forEach(function (val, ind, ary) { // forEach : 배열의 각 요소에 대해서 어떤 기능을 실행하겠다는 것
    // 콜백 함수의 파라미터는 요소, index 그리고 현재 map메서드를 호출한 배열
    if (val > 10)
        sum += val;
    // document.write(`<h1>${val}</h1>`);
});

console.log(`합계 : ${sum}`);

document.write('<button onclick="createList()">생성</button>');
document.write('<div id="show"></div>')

function createList() {
    let fruits = ['Apple', 'Banana', 'Cherry'];
    let ulTag, liTag; // 변수선언

    ulTag = document.createElement('ul'); // <ul></ul>

    for (let fruit of fruits) {
        liTag = document.createElement('li'); // <li></li>
        liTag.innerHTML = 'Apple'; // <li>Apple</li>
        liTag.id = fruit.toLowerCase();
        liTag.setAttribute('class', fruit) // (속성이름, 값) / ('border', 1) -> <table border="1">
        ulTag.appendChild(liTag); // <ul></ul>
    }

    document.getElementById("show").appendChild(ulTag);
};

function User(id, name, point) { // 생성자 함수라는 의미를 가지려고 대문자 씀
    this.name = name;
    this.id = id;
    this.point = point;
};
const users = [new User('user1', '사용자', 90),
    new User('user2', '사용자2', 110),
    new User('user3', '사용자3', 200),
    new User('user4', '사용자4', 190)
];
console.log(users);

function showList() {

    let str = '<h1>회원리스트</h1>';
    str += '<table border="1">';
    str += '<tbody>';
    users.forEach(callBackFnc); // forEach의 매개값으로 실행되도록 / forEach는 return값 없음
    str += '</tbody>';
    str += '</table>';
    document.write(str);

    function callBackFnc(val, ind, ary) {
        str += '<tr><td>' + val.id + '</td><td>' + val.name + '</td><td>' + val.point + '</td>'
    }

};