class Person {
    // 클래스 필드
    name = 'Lee'

    age // 만약 클래스 필드를 초기화 하지 않으면 undifined가 뜬다.
    constructor() {
        this.age = 11 // 초기화 하지 않은 필드가 있다면 반드시 constructor 에서 초기화 해준다.
    }

    // 클래스 필드에 변수를 할당하면 프로토타입 메서드가 아닌 인스턴스 메서드가 된다.
    // 따라서 인스턴스가 생길 때 마다 메서드가 생성되므로 권장 되지는 않는다
    getName = function () {
        return this.name
    }

}

const me = new Person()

console.log(me) // Person { name: 'Lee', age: 11 }

console.log(me.getName()) // Lee
