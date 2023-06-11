

// 논리합
var done = false
var message = ''


if (!done) message = "미완료"

// 조건이 falsy 값일 때 무언가를 해야한다면 논리합 연산자로 대체 가능하다.
message = done || '미완료'

console.log(message)


// 논리곱
var done2 = true
var message2 = ''


if (done2) message2 = "완료"

// 조건이 true 값일 때 무언가를 해야한다면 논리곱 연산자로 대체 가능하다.
message2 = done2 && '완료'

console.log(message2)