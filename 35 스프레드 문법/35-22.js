const obj = {x:1, y:2}
// 얕은 복사를 사용하여 새로운 복사본 생성
const copy = {...obj}

console.log(copy)
console.log(obj === copy) // false


// ES5의 assign
const merge = Object.assign({}, {x:1, y:2}, {x:3,y:10, z:4})
console.log(merge) // { x: 3, y: 10, z: 4 }

// 스프레드 문법
const merge2 = {...{x:1, y:2}, ...{x:3,y:10, z:4}}
console.log(merge2) // { x: 3, y: 10, z: 4 }

