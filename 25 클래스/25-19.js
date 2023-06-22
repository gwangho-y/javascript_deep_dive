class Person {
    constructor(name, address) {
        this.name = name;
        this.address = address;

        // constructor에서 return이 있어서는 안 된다.
        // 생성자 함수와 마찬가지로 암묵적으로 this, 미래에 생성될 인스턴스를 반환하기 때문이다.
    }

    // 프로토타입 메서드
    // 클래스 내에서 메서드를 선언하면 기본적으로 프로토타입 메서드로 선언된다.
    sayHi() {
        console.log(`안녕, 내 이름은 ${this.name}이고 사는 곳은 ${this.address} 야!`)
    }
}

const me = new Person('Lee', 'Seoul');
me.sayHi()

console.log(Person.prototype.sayHi())