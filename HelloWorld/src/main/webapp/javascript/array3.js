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
let resultAry = [];
let sum = filterUsers.reduce(function (prevObj, curObj/*, ind, ary*/) { 
    console.log(prevObj, curObj);
    resultAry.push(curObj.score);
    // return prevObj + curObj.score; // return된 값이 그 다음 순번의 의 초기값이 됨
    // 3번 돌면서 score값을 합해서 누적시킴 / 누적되는 값은 그 전에 가지고 있던 초기값이랑 지금 score를 합쳐서 그 다음 순번의 초기값으로 만들어줌
    return curObj.score;
}, resultAry); 
console.log(`합계 : ${sum}`);
console.log('---------------------------')

//

