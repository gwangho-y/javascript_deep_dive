const arr = [1,2,3]
// 배열 디스트럭처링 할당
const [one, two, three] = arr
console.log(one, two, three) // 1 2 3

// 배열은 인덱스를 기준으로 순서대로 할당된다.
const [a, b] = [1,2]
console.log(a, b) // 1, 2

// 요소의 갯수가 반드시 일치하지 않아도 된다.
const [c, d] = [1]
console.log(c, d) // 1 undefined

// 빈 값을 넣으면 건너뛰고 계속해서 순서대로 저장한다.
const [g, , h] = [1,2,3]
console.log(g,h) // 1 3

// 기본값도 설정 가능
const [i, j, k= 3] = [1,2]
console.log(i, j, k ) // 1 2 3
// 기본값보다 할당된 값이 우선된다.
const [l,m= 10,n= 30] = [1,2]
console.log(l, m, n) // 1 2 30

// Rest 문법도 사용할 수 있다.
const [x, ...y] = [1,2,3]
console.log(x, y) // 1 [ 2, 3 ]



