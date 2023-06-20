const Counter = (function () {
    let num = 0
    function Counter() {
        // 여기에 프로퍼티를 선언하면 public이 되기 때문에 정보은닉이 되지 않는다
    }
    Counter.prototype.increase = function () {
        return ++num
    }

    Counter.prototype.decrease = function () {
        return --num
    }


    return Counter
}())


const counter = new Counter()

console.log(counter.increase()) // 1
console.log(counter.decrease()) // 0

console.log(counter.increase()) // 1
console.log(counter.decrease()) // 0