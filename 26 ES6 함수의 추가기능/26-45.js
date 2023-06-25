class Person {
    constructor(name) {
        this.name = name
        // 프로토 타입으로 선언되는게 아니라 인스턴스 프로퍼티로 메서드가 선언되니깐 이렇게 사용하지는 말자
        this.sayHi = () => console.log(`Hi, ${this.name}`)
    }

    sayBye() {
        console.log(`Bye, ${this.name}`)
    }

    sayYo = () => {
        console.log(`Yo, ${this.name}`)
    }
}

const people = new Person('Lee')
people.sayHi() // Hi, Lee
people.sayBye() // Bye, Lee
people.sayYo() // Bye, Lee



