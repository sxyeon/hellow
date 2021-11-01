// array5.js
// 요소(태그)생성: document.createElement('element') .. element는 태그를 말함
// 상위요소 > 하위요소 : 상위요소.appendChild(하위요소)

function User(id, name, point) {
    this.name = name;
    this.id = id;
    this.point = point;
};
const users = [new User('user1', '사용자', 90),
    new User('user2', '사용자2', 110),
    new User('user3', '사용자3', 200),
    new User('user4', '사용자4', 190)
];

// 표형식(table)으로 생성.
document.write('<div id="show"></div>');
document.write('<button onclick="createContent()">생성</button>');

// <ul><li>아이디, 이름, 점수</li><li>아이디, 이름, 점수</li></ul>
let table = document.createElement('table');
table.border = "1";
let thead = document.createElement('thead');
let tr = document.createElement('tr');
for(let field in users[0]) {
    let th = document.createElement('th');
    th.innerHTML = field;
    tr.appendChild(th);
}
thead.appendChild(tr);
table.appendChild(thead);

let tbody = document.createElement('tbody');
for(let i = 0; i < users.length; i++) {
    let tr = document.createElement('tr');
    for(let field in users[i]) {
        let td = document.createElement('td');
        td.innerHTML = users[i][field];
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
}
table.appendChild(tbody);
console.log(table);
document.getElementById("show").appendChild(table);
