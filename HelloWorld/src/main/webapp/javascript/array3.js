// array3.js(Array.map)

function User (id, name, point) { // 생성자 함수라는 의미를 가지려고 대문자 씀
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

const newUsers = users.map(function (val, ind, ary) { // map이 반환해주는 것은 배열
    let newObj = {} // 새로운 오브젝트 선언, object는 {}로 선언
    newObj.uid = val.id; // 필드 정의
    newObj.uname = val.name;
    newObj.score = val.point;
    newObj.idx = ind;

    return newObj; // 최종적으로  uid, uname, score, ind를 가지는 새로운 배열 생성
    //return val.id + '-' + val.name; 
});
console.log(newUsers);

const filterUsers = newUsers.filter(function(val, ind) { //function에서 변수 필요없으면 안 넣어도 됨
    // filter 메소드는 true인 값만 반환해줌
    // return val.idx > 1; // idx값이 1보다 큰 2와 3만 리턴됨
    // return true;
    return val.idx; // idx값이 있는 것만 반환. 0은 false니까 반환되지 않음 / true or false
}); // return되는 값이 true이면 반환해줌
console.clear();
console.log(filterUsers); 

// reduce는 최종값이 하나. 전체 요소들을 가지고 하나의 값으로 추려주는 메소드
let sum = filterUsers.reduce(function(initVal, obj, ind, ary){
    // if(ind != 0) {
    //     console.log(initVal[ind - 1].uid, obj.uid);
    // }
    console.log(initVal, obj, ind/*, ary*/);
    initVal.push(obj);
    return initVal; // 배열에 오브젝트 담음
}, []); // 참조값.. a=3, a={}
// 배열을 초기값으로 / initVal는 배열
console.log(sum);

let sum2 = function sum2(num1, num2) {
    return num1 + num2;
}

sum2 = (num1, num2) => num1 + num2; // num1과 num2를 더한 값을 반환하겠다는 것을 표현한 간단 표현식


let trueOrFalse = [45, 4, 9, 16, 25].some(function (val, ind, ary) { // 조건체크 : some은 해당되는 값이 하나라도 있으면 true 리턴 / every는 전체값이 모두 해당되어야 true 리턴
    return val > 10;
});
console.log(trueOrFalse);

const fruits = ['Apple', 'Orange', 'Apple', 'Mango'];
console.log(fruits.indexOf('Apple')); // indexOf는 해당되는 값 찾아줌
console.log(fruits.lastIndexOf('Apple')); // lastindexOf는 뒤에서부터 값 찾아줌 
console.log(fruits.includes('Apple')); // includes는 배열이 특정 요소를 포함하고 있는지 판별
console.log(fruits.find(function(val, ind, ary) {
    return val == 'Apple';
})); // find : apple이라는 요소를 찾아서 그 값이 있으면 그대로 return / callBack함수 들어가야됨

console.log(Array.from('ABCD')) // 문자열 배열타입으로 바꿈
console.log('A,B,C,D'.split(","));

console.log(fruits.keys());
for(let x of fruits.keys()) {
    console.log(x);
}

