// 익명 함수 리터럴을 콜백 함수로 고차 함수에 전달한다.
// 익명 함수 리터럴은 repeat 함수를 호출 할 때마다 평가되어 함수 객체 생성
repeat(5, function (i){
    if (i % 2) console.log(i);
});

function repeat(n,f) {
    for (var i = 0; i < n; i++) {
        f(i);
    }
}