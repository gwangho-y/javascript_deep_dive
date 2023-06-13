const person = {name: 'Lee'}

// person 객체가 __proto__ 프로퍼티를 소유하고 있는 것이 아니라
console.log(person.hasOwnProperty('__proto__')); // false


// 모든 객체의 프로토타입 객체인 Object.prototype 가 접근자 프로퍼티로 소유하고 있다.
console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'))

/*{
    get: [Function: get __proto__],
    set: [Function: set __proto__],
    enumerable: false,
    configurable: true
}*/

console.log({}.__proto__ === Object.prototype) // true


