// NaN 자신과 일치 하지 않은 유일한 값
console.log(NaN === NaN) // false

// NaN을 조사 하려면 빌트인 함수 Number.isNaN를 사용한다
console.log(Number.isNaN(NaN))
console.log(Number.isNaN(10))
console.log(Number.isNaN(1 + undefined))


