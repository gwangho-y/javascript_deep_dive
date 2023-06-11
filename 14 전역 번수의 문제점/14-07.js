var Counter = (function () {

    // private 변수
    var num = 0

    return {
        increase() {
            return ++num
        },

        decrease() {
            return --num
        }
    }
}())


console.log(Counter.num)   // private에는 접근 불가
console.log(Counter.increase())
console.log(Counter.increase())
console.log(Counter.decrease())
console.log(Counter.decrease())
