// 클로저를 사용해서 상태값을 은닉 시킬 수 있다.
// 아래의 increase를 사용하지 않는 이상 num 값을 변경하는 것은 불가능하다

const increase = (function (){
    let num = 0
    console.log(num)

    // 1. 상위 스코프인 즉시 실행 함수의 렉시컬 환경을 기억하고 있다.
    // 2. 상위 스코프인 즉시 실행 함수의 num을 참조하고 있기 때문에 클로져다
    return function () {
        return ++num
    }
}())

console.log(increase()) // 1
console.log(increase()) // 2
console.log(increase()) // 3