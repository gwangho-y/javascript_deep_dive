// 일반 함수 정의 : 함수 선언문, 함수 표현식
//  constructor
function foo() {}
const bar = function () {}

// 프로퍼티 x의 값에 할 당된 함수는 일반 함수로 정의된 함수. 메서드로 인정되지 않는다.
const baz = {
    // 그렇기 때문에 x도 constructor
    x: function() {}
}

new foo()
new bar()
new baz.x()


//// 여기 부터 non-constructor
// 화살표 함수 정의
const arrow = () => {}

new arrow() // 에러

// 메서드 정의 : ES6의 메서드 축약 표현이므로 non-constructor
const obj = {
    x() {}
}

new obj.x // 에러