// 일반 함수로 호출되면 this는 반드시 전역인 whindow가 바인딩 된다.

var value = 1

const obj = {
    value: 100,
    foo() {
        console.log(this) // { value: 100, foo: [Function: foo] }
        console.log(this.value) // 100

        // 일반 함수 (중첩, 콜백 함수 포함)로 호출할 시 this에는 반드시 전역이 바인딩된다.
        function bar() {
            console.log(this) // window
            console.log(this.value) // 1
        }
        bar()
    }
}

obj.foo()