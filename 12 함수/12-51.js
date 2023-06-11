/*
    공통으로 사용되는 함수 묶기
    변하지 않는 공통 로직은 미리 정의하고 변경되는 로직은 추상화해서 함수 외부에서 내부로 전달

    Js에서 함수는 일급 객체라서 전달 가능
    * 일급객체 : 값의 성질을 갖는 객체, Js함수는 객체 타입의 값을 가지고 있기 때문에 값의 성질을 가지고 있다
*/

// 고차 함수 : 콜백함수를 매개변수로 전달받은 함수
function repeat(n,f) {
    for (var i = 0; i < n; i++) {
        f(i);
    }
}

// 콜백 함수
var logAll = function (i) {
    console.log(i);
};

//콕백 함수
var logOdds = function (i) {
    if(i%2) console.log(i)
};




// 반복 호출할 함수를 인수로 전달
repeat(5, logAll)

// 반복 호출할 함수를 인수로 전달
repeat(5, logOdds)