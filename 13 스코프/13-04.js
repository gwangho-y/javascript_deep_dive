function foo () {
    var x = 1
    // var 는 같은 스코프 안에서 중복선언을 허용한다.
    // 밑에 있는 x는  js 엔진에 의해 var 키워드가 없는 것 처럼 동작한다
    var x = 2
    console.log(x)
}

foo()