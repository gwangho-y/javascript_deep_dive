function Person(name) {
    this.name = name
}

const me = new Person('Lee')

// constructor는 인스턴스를 생성한 생성자 함수를 가리킨다
console.log(me.constructor) // [Function: Person]
console.log(Person.constructor) // [Function: Function]
// Person은 생성자 함수고
console.log(Person.prototype.constructor) // [Function: Person]


// 프로토타입은 constructor를 이미 가지고 있기 때문에 me도 기능을 상속받아 바로 사용 가능하다
// constructor를 통해서 자신을 생성한 생성자 함수와 연결된다.
console.log(Person.prototype.constructor === me.constructor) // true
console.log(Person.prototype.constructor === me.__proto__.constructor) // true