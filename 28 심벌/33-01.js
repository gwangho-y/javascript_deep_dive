// 1. 심벌은 new 연산자를 사용하지 않는다. new 연산자는 객체를 생성하지만 심벌 값은 원시 값이기 때문이다.
// 2. Symbol에 들어가는 문자열 인자는 description 이라고 하며, symbol 값 생성에 아무런 영향을 주지 않느다
const mySymbol = Symbol('mySymbol')
const mySymbol2 = Symbol('mySymbol')

console.log(mySymbol) // Symbol(mySymbol)
console.log(mySymbol2) // Symbol(mySymbol)

// description의 문자열이 같기 때문에 true라고 생각했지만, description은 어디까지나 설명일 뿐. synbol 값은 유일무이한 값이다.
console.log(mySymbol === mySymbol2) // false


// symbol 값은 객체처럼 접근하면 암묵적으로 래퍼 객체를 생성한다.
// description 프로퍼티는 Symbol.prototype의 프로퍼티다.
console.log(mySymbol.description) // mySymbol


