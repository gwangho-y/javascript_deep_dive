const obj = {}
const parent = {x:1}
const grandParent = {y:1}

Object.setPrototypeOf(parent, grandParent);

console.log(Object.getPrototypeOf(parent)) // { y: 1 }


// 객체의 프로토타입 취득
Object.getPrototypeOf(obj) // null

// 객체의 프로토타입을 교체
Object.setPrototypeOf(obj, parent);

console.log(Object.getPrototypeOf(obj)) // { x: 1 }

console.log(obj.x) // 1
console.log(obj.y) // 1


// const parent = {}
// const child = {}