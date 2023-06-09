var x =1
function foo() {
    var x = 10;
    bar()


}

/*
    bar가 정의된 시점에 상위 스코프가 결정된다. 호출 된 곳에서 상위 스코프를 설정하는게 아니다.
    bar에서 사용되는 x는 bar가 정의된 이 위치에서 상위스코프인 전역에 선언된 x를 가리킨다.
*/
function bar () {
    console.log(x)
}

foo()
bar()