var x = 'global'

function foo() {
    var x = 'local'
    console.log(x) // 함수 내부에서 선언된 식별자는 함수 내부에서만  참조할 수 있다
}
foo()
console.log(x)