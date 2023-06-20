const counter = (function (){
    let num = 0

    return {
        increase() {
            return ++num
        },
        decrease() {
            return --num;
        }
    }
}())

console.log(counter.increase()) // 1
console.log(counter.decrease()) // 0

console.log(counter.increase()) // 1
console.log(counter.decrease()) // 0