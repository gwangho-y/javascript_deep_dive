// 24-16 에서 생성자의 name에는 접근이 가능했기 때문에 이 걸 클로져를 사용해서 private하게 유지해보자
// 하지만 상태값 유지가 안 된다. ㅜㅜ
const Person = (function (){
    let _age = 0 // private

    function Person(name, age) {
        this.name = name // public
        _age = age
    }

    Person.prototype.sayHi = function () { // 프로토타입을 만들어서 sayHi의 중복 생성도 방지 시켰다.
        console.log(`Hi! My name is ${this.name}. I am ${_age}.`)
    }

    return Person
}())

const me  = new Person( 'Lee', 20)
me.sayHi() // Hi! My name is Lee. I am 20.
console.log(me.name) // Lee
console.log(me._age) // undefined


const you  = new Person( 'kim', 30)
you.sayHi() // Hi! My name is kim. I am 30.
console.log(you.name) // kim
console.log(you._age) // undefined


// _age 변수 값이 변경됐다. 상태값을 유지 하지는 못 한다.
me.sayHi() // Hi! My name is Lee. I am 30.
