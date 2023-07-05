// es5 splice
function sum() {
    const args = Array.prototype.slice.apply(arguments)
    return args.reduce((acc, cur) => acc += cur, 0)
}

// es6 스프레드
function sum2() {
    return [...arguments].reduce((acc, cur) => acc += cur, 0)
}

// es6 Rest 파라미터
const sum3 = (...args) => args.reduce((acc, cur) => acc += cur, 0)

console.log(sum(1,2,3))  // 6
console.log(sum2(1,2,3)) // 6
console.log(sum3(1,2,3)) // 6




