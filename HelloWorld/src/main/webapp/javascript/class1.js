// class1.js
const obj = { // 오브젝트로 속성과 형식 선언
    name: 'Hong',
    age: 23,
    score: 80,
    getScore: function () {
        return this.score; // 스코어 리턴해주는 메소드
    }
};
console.log(obj.getScore());

function Student(name, math, eng) { // 생성자함수면 =로 선언
    this.name = name;
    this.math = math;
    this.eng = eng;
    this.getName = function () {
        return this.name;
    }
    this.getMathScore = function () {
        return this.math;
    }
    this.getEngScore = function () {
        return this.eng;
    }
}

const s1 = new Student('홍길동', 80, 70);
let result = s1.getMathScore();
console.log(s1.getName() + ', ' + s1.getEngScore() + ', ' + s1.getMathScore());

class Car {
    constructor(name, color) { // 생성자 선언
        this.name = name; 
        this.color = color;
    }
    showColor () {
        return this.color;
    }
    setColor(color){
        this.color = color;
    }
    getInfoByDom() {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.innerHTML = this.name;
        let td2 = document.createElement('td');
        td2.innerHTML = this.color;
        tr.append(td1, td2);
        return tr;
    }
    getNameByTd() {
        let td = document.createElement('td');
        td.innerHTML = this.name;
        return td;
    }
    getColorByTd() {
        let td = document.createElement('td');
        td.innerHTML = this.color;
        return td;
    }
    getRowByTr() {
        let tr = document.createElement('tr');
        tr.appendChild(this.getNameByTd());
        tr.appendChild(this.getColorByTd());
        return tr;
    }
}

const sonata = new Car('쏘나타', '흰색');
const avante = new Car('아반떼', '검은색');
let color = sonata.showColor();
sonata.setColor(color);
color = sonata.showColor();
console.log(color);

document.write('<table border="1" id="tbl"></table>');
document.getElementById("tbl").appendChild(sonata.getRowByTr());
document.getElementById("tbl").appendChild(avante.getNameByTd());
