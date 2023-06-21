function Person(name, age) {
    this.name = name // public
    let _age = age // private


    // 인스턴스 메서드
    this.sayHi = function () {
        console.log(`Hi! My name is ${this.name}. I am ${_age}.`)
    }
}

const me  = new Person( 'Lee', 20)
me.sayHi() // Hi! My name is Lee. I am 20.


const you  = new Person( 'kim', 30)


you.sayHi() // Hi! My name is kim. I am 30.


console.log(you.name) // kim
console.log(you._age) // undefined