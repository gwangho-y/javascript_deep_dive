var x = 1

if (true) {
    // x는 전역 변수. 위에 전역 변수가 있어서, 여기의 x는 중복 선언된다.
    // var 키워드는 없는 것 처럼 인식되고, 재할당만 이뤄진다.
    // 의도치 않게 변수값이 변경되는 부작용이 있다.
    var x = 10
}

console.log(x) // 10

var i = 10

for (var i = 0; i < 5; i++) {
    console.log(i) // 0, 1, 2, 3, 4
}
// for 문은 지역 스코프가 아닌 전역 스코프라서 i는 5로 잡힌다.
console.log(i) // 5