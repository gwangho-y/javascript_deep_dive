// 객체 디스트럭처링
const user ={ firstName: '광호', lastName: '이'}
const {firstName, lastName} = user
console.log(firstName, lastName) // 광호 이

// 프로퍼티키와 다른 이름으로도 선언 가능
// 배열 디스츠럭처링과 마찬가지로 기본값 보다 할당된 값이 우선된다.
const {firstName: fn, lastName: ln= '김'} = user
console.log(fn, ln) // 광호 이

// String 래퍼 객체에서 length 프로퍼티만 추출 가능하다
const str = 'hello'
const {length} = str
console.log(length) // 5

function lengthDist() {
    // 유사 배열 객체에서도 length 프로퍼티만 추출 가능하다
    const {length} = arguments
    console.log(length)
}
lengthDist(1,2,3) // 3
