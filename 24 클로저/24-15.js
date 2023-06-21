// 함수를 반환하는 고차 함수
const counter = (function () {
    let counter = 0

    // 함수를 인수로 전달받는 클로저를 반환
    return function (aux) {
        // 인수로 전달 받은 보조함수에 상태 변경을 위임한다.
        counter = aux(counter)
        return counter
    }
}())

// 보조 함수
function increase(n) {
    return ++n
}

function decrease(n) {
    return --n
}

console.log(counter(increase)) // 1
console.log(counter(increase)) // 2


console.log(counter(decrease)) // 1
console.log(counter(decrease)) // 0
