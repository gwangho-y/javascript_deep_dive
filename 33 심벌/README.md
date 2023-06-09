# 7번째 데이터타입 symbol
## Symbol
- ES6에서 도입된 7번째 데이터 타입
- 변경불가능한 원시 타입 값이며 다른 값과 충돌되지 않는 유일무이한 값이다.
- 주로 이름의 충돌 위험이 없는 유일한 프로퍼티 키를 만들기 위해 사용한다.
- Symbol()로 생성 시 전역 심벌 레지스트리에 저장되어 관리되지 않는다


    // 1. 심벌은 new 연산자를 사용하지 않는다. new 연산자는 객체를 생성하지만 심벌 값은 원시 값이기 때문이다.
    // 2. Symbol에 들어가는 문자열 인자는 description 이라고 하며, symbol 값 생성에 아무런 영향을 주지 않느다
    const mySymbol = Symbol('mySymbol')
    const mySymbol2 = Symbol('mySymbol')
    
    console.log(mySymbol) // Symbol(mySymbol)
    console.log(mySymbol2) // Symbol(mySymbol)
    
    // description의 문자열이 같기 때문에 true라고 생각했지만, description은 어디까지나 심벌에 대한 설명일 뿐, 
    // synbol 값은 유일무이한 값이다.
    console.log(mySymbol === mySymbol2) // false
    
    
    // symbol 값은 객체처럼 접근하면 암묵적으로 래퍼 객체를 생성한다.
    // description 프로퍼티는 Symbol.prototype의 프로퍼티다.
    console.log(mySymbol.description) // mySymbol


## Symbol.for

- 문자열을 키로 사용하여 전역 심벌 레지스트리에서 일치하는 심벌 값을 검색한다.
- 검색 실패 -> 새로운 심벌 값을 생성 -> 전역 심벌 레지스트리에 저장 -> 심벌 반환
- 검색 성공 -> 심벌 반환


    // 전역 심벌 레지스트리에 mySymbol 키로 저장된 심벌 값이 없으면 새로운 심벌 값을 생성
    const s1 = Symbol.for('mySymbol')
    // 전역 심벌 레지스트리에 mySymbol 키로 저장된 심벌 값이 있으면 심벌 값을 반환
    const s2 = Symbol.for('mySymbol')
    
    console.log(s1 === s2) // true

## Symbol.keyFor
- 전역 심벌 레지스트리에서 심벌 값의 키를 추출할 수 있다.


    const s1 = Symbol.for('mySymbol')
    console.log(Symbol.keyFor(s1)) // mySymbol

    // Symbol 함수로 생성 시 전역 심벌 레지스트리에 등록 되지 않기 때문에 keyFor로 검색 불가능하다
    const s3 = Symbol('foo')
    Symbol.keyFor(s3) // undefined



## Well-known Symbol
자바스크립트가 제공하는 빌트인 심벌을 Well-known Symbol이라고 하며 내부 알고리즘에 사용된다.
배열과 map 같은 for문으로 순회 가능한 것들은 [Symbol.iterator] 라는 메서드를 가지고 있다.
Symbol.iterator 를 호출하면 for문 같은 반복문으로 요소 순회가 가능하게 된다.<br>
Symbol.iterator 이외에도 Symbol.replace, Symbol.toStringTag 같은 여러 Well-known Symbol 들이 있다.



Symbol.iterator을 사용해서 객체를 만들면 배열처럼 순회 가능한 객체가 된다.





    // array나 map , set 등은 for of로 순회 가능한 객체를 만든다.
    const iterable = {
    // Symbol.iterator 메서드를 구현하면 이터러블 프로토콜을 준수하게 된다.
    [Symbol.iterator]() {
    let cur = 1
    const max = 5
    
            // 여기의 return객체를 이터레이터라고 하고
            // 이터레이터는 next라는 메서드를 소유해야한다
            // 다음 요소를 가져온다. 
            return {
                next() {
                    return { value: cur++, done: cur > max + 1}
                }
            }
    
        }
    }
    
    for (const i of iterable) {
    console.log(i)
    }