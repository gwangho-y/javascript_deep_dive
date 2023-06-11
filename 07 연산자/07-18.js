// Object.is 메서드는 예측 가능한 정확한 비교 결과를 반환한다.
console.log(-0 === +0) // true
console.log(Object.is(-0, +0)) // false

console.log(NaN === NaN) // false
console.log(Object.is(NaN, NaN)) // true


console.log(Object.is(5, -5)) // false
