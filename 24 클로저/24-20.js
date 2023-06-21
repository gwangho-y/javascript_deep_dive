// ****************클로저를 사용할 때 자주 발생하던 실수다

var funcs = [];

// var i = 3   // i는 전역 변수이므로 최종적으로 3만 저장되어 있다.

for (var i = 0; i < 3; i++) { // var로 선언했기 때문에 i는 전역 변수다.
    funcs[i] = function () {return i;} // return i는 전역 변수 i를 참조한다
}

// funcs[0], funcs[1], funcs[2] 모두 i 가 저장되어 있다.
// i는 전역 변수고 3이 저장되 있기 때문에 3만 출력된다.
for (var j = 0; j < 3; j++) { // var로 선언했기 때문에 i는 전역 변수다.
    console.log(funcs[j]()) // 3
}


// 클로저를 사용할 때 자주 발생하던 실수다 *******************************



// *************클로저를 바르게 동장 시켜보자

var funcs = [];

for (var i = 0; i < 3; i++) {
    funcs[i] = (function (id){
        return function () {
            return id
        }
    }(i)) // i를 아예 인수로 넘겨줘서 값 복사를 해버린다
}

for (var j = 0; j < 3; j++) {
    console.log(funcs[j]()) // 0, 1, 2
}