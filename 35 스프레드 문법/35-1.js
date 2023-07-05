// 순회 가능한 이터러블들은 스프레드 문법 사용 가능
console.log(...[1,2,3]) // 1 2 3

console.log(...'Hello') // H e l l o

console.log(new Map([['a','1'], ['b','2']])) // Map(2) { 'a' => '1', 'b' => '2' }

console.log(...new Map([['a','1'], ['b','2']])) // [ 'a', '1' ] [ 'b', '2' ]

console.log(new Set([1,2,3])) // Set(3) { 1, 2, 3 }

console.log(...new Set([1,2,3])) // 1 2 3


// 이터러블이 아닌 일반 객체라서 스프레드 문법 사용 불가
console.log(...{a:1,b:2,c:3})


