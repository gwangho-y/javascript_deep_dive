// var elem = null
// var value = elem.value // TypeError: Cannot read properties of null


// 타입 에러 방지를 위해 논리 곱을 사용해서 elem2가 먼저 truthy 값인지 확인 한 후에 원하는 값을 반환하도록 한다.
var elem2 = null
var value2 = elem2 && elem.value
console.log(value2)