// 클래스 몸체에서 정의 할 수 있는 메서드는 생성자, 프로토타입 메서드, 정적메서드 3가지가 있다.
class Person {
    constructor(name) {
        // 인스턴스 생성, 초기화
        this.name = name
    }
    // 프로토타입 메서드
    sayHi() {
        console.log(`Hi! My name is ${this.name}`)
    }
    // 정적 메서드
    static sayHello() {
        console.log('Hello!')
    }
}

const me = new Person('Lee')

console.log(me.name)

Person.sayHello()

console.log(Person.prototype)