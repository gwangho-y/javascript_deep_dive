// 전역 심벌 레지스트리에 mySymbol 키로 저장된 심벌 값이 없으면 새로운 심벌 값을 생성
const s1 = Symbol.for('mySymbol')
// 전역 심벌 레지스트리에 mySymbol 키로 저장된 심벌 값이 있으면 심벌 값을 반환
const s2 = Symbol.for('mySymbol')

console.log(s1 === s2) // true



console.log(Symbol.keyFor(s1)) // mySymbol

// Symbol 함수로 생성 시 전역 심벌 레지스트리에 등록 되지 않기 때문에 keyFor로 검색 불가능하다
const s3 = Symbol('foo')
Symbol.keyFor(s3) // undefined