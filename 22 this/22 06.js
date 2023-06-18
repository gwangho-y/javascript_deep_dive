// this 바인딩은 함수 호출 방식에 따라 동적으로 결정된다.
const foo = function () {
    console.dir(this)
};

// 일반 함수의 this 는 전역을 가리킨다
// foo() // window || global

// 메서드 호출
const obj = {
    name: '오브젝트',
    foo
}
// 메서드로 호출된 foo의 this는 메서드를 호출한 객체 obj를 가리킨다
obj.foo() // { foo : ƒ (),  name : "오브젝트" }


// 생성자 함수로 호출된 foo는 생성된 인스턴스 자기 자신을 가리킨다.
new foo(); // foo {}




