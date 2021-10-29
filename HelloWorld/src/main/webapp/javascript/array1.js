// array1.js
const persons = [];
function addFnc() {
    let addBtn = document.getElementById('add'); // id값이 add인 것을 가져옴
    let val = addBtn.value;
    persons.push(addBtn.value); // 마지막에 요소를 추가. // unshift가 들어가면 요소 제일 첫번째에 추가

    console.log(persons);
}

function remFnc() {
    let findVal = document.getElementById('add').value; 
    let cnt = -1; // 변수가 선언된 영역이 중요함 / 인덱스값은 의미없는 값으로
    for(let i = 0; i < persons.length; i++) {
        if(persons[i] == findVal) {
            cnt = i;
            break;
        }
    }
    if(cnt >= 0) {
        persons.splice(cnt, 1);
    }
    console.log(persons); 
}

document.write('<input type="text" id="add" value="hong">');
document.write('<button onclick="addFnc()">추가</button>');
document.write('<button onclick="remFnc()">삭제</button>');



const ary = ['hong', 'hwang']; // new Array();로 해도 됨 // 배열선언
console.log(ary[0])
ary[0] = 'hong1';  // 배열 안에 있는 값 변경
ary[1] = 'hwang1';
ary[2] = 'park'; // 값 추가 가능
// ary[ary.length] = 'kim'; // 빈 곳 없이 배열 마지막에 넣어주기
// ary[4] = 'choi'; // 건너뛰기 (3에 값 없으니까 console에 undefined 뜸)
// ary[ary.length] = 'lee';
// ary.push('new');
// ary.push('new2');

ary.push('choi'); // 제일 마지막 추가
// ary.pop(); // 제일 마지막 삭제

//delete ary[3]; // 인덱스의 3번째 위치에 있는 값을 지움
// 근데 값이 없어지니까 undefined 뜸
// ary.pop(); // pop은 마지막 위치에 있는 요소 제거
// splice : index, size, replace
// ary.splice(3, 1 /*, 'new park'/*, 'new kim', 'new lee'*/); // 매개값이 올 수 있음 (index 위치, 인덱스부터 n개까지, ~~값으로 대체(대체값 없으면 삭제))
//ary.splice(3, 0, 'new choi'); // size가 0이면 대체할 값 없이 추가함 // choi라는 값 들어가있는 거 new choi로 바꿈
//ary.unshift('first'); // 제일 앞쪽에 값 추가
//ary.shift(); // 제일 앞쪽 값 삭제

for(let i = 0; i < ary.length; i++) {
    console.log(ary[i]); 
}
console.log('------------------')

for(let val of ary) {
    console.log(val);
}
console.log('------------------')

const newAry = ary.slice(1,2); // 추출한 요소를 포함한 새로운 배열
// slice(include, exclude)
console.log(newAry);

const mergeAry = ary.concat(newAry); // 합침
console.log(mergeAry);

mergeAry.sort(); // 정렬
console.log(mergeAry); 

mergeAry.reverse();
console.log(mergeAry); // 역순으로

const numbers = [2, 10, 100, 24, 4];
numbers.sort(function (f, l) { // 두 개의 값을 비교해서 // sort의 매개값으로 정렬을 해줌
    // if(f < l) {
    //     return -1; // 조건에 만족하면 음수값 반환
    // } else {
    //     return 1; // 아니면 양수 반환
    // }
    return l - f; // 역순 정렬
});
console.log(numbers);

const s1 = {
    name: 'hwang',
    score: 70
}

const s2 = {
    name: 'park',
    score: 80
}

const s3 = {
    name: 'choi',
    score: 90
}

const students = [s1, s2, s3];
students.sort(function (f, l) {  // sort의 매개값으로 function 정의가 되어있음 / 양수 리턴되면 내림차순으로 정렬 음수 리턴되면 오름차순으로 정렬
    if(f.score < l.score) {
        return -100;
    } else {
        return 1;
    }
});

console.log(students);