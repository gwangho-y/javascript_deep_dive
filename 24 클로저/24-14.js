// 함수를 반환하는 고차 함수
// counter를 기억하는 클로져를 반환한다
function makeCounter(aux) {
    let counter = 0

    return function () {
        counter = aux(counter)
        return counter
    }
}

function increase(n) {
    return ++n
}

function decrease(n) {
    return --n
}

const increaser = makeCounter(increase)
console.log(increaser()) // 1
console.log(increaser()) // 2


// 서로 다른 별개의 객체이기 때문에 counter 변수를 공유하지 않는다
const decreaser = makeCounter(decrease)
console.log(decreaser()) // -1
console.log(decreaser()) // -2
