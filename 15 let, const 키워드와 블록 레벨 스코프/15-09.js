
// 런타임 이전에 선언 단계가 실행. 초기화는 일어나지 않음.
// 초기화 전이므로 일시적 사각지대에 있어서 변수 참조 불가능하다.
console.log(foo) // 참조 오류

// 변수 선언문에서 초기화 단계 실행된다. foo === undefined
let foo
console.log(foo) //

foo = 1 // 할당 단계 실행
console.log(foo)