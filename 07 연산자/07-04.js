// 단항 산술 연산자

var x =5, result;

// 선할당 후 증가
result = x++
console.log(result, x) // 5, 6    result에 할당을 먼저하고 x를 증가시킨다 result는 x의 원래 값 5만 할당된다

// 선증가 후 할당
result = ++x
console.log(result, x) // 7, 7
