class Person {
    constructor(name) {
        this.name = name;
    }
    // 정적메서드
    // static 메서드로 선언하면 프로토타입 객체가 가지지 않고, 클래스의 프로퍼티로 존재하게 된다.
    static sayHi() {
        console.log('Hi!')
    }
}

Person.sayHi()

const me = new Person('lee')
// 프로토타입에 메서드가 없으므로 인스턴스에서는 호출할 수 없다.
me.sayHi() // me.sayHi is not a function
