const obj = {}
const parent = {x:1}

// getter 함수인 get __proto__ 가 호출된다
obj.__proto__
// setter 함수인 set __proto__ 가 호출된다
// setter를 통해 상속을 내가 시켜 줄수도 있구나
obj.__proto__ = parent


console.log(obj.__proto__) // { x: 1 }
// 싱기방기
console.log(obj.x) // 1