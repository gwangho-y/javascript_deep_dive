// 런타임 이전에 선언과 초기화가 실행된다. foo ==== undefined
// 따라서 변수 선언문 이전에 변수를 참조할 수 있다.
console.log(foo) // undefined

var foo
console.log(foo) // undifined

foo = 1 // 할당문에서 할당 단계가 실행된다.

console.log(foo) // 1