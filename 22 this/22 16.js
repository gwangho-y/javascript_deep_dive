function Person(name) {
    this.name = name
}


// 프로토타입 내부의 this도 해당 메서드를 호출한 객체에 바인딩 된다.
Person.prototype.getName = function () {
    return this.name
};

const me = new Person('Lee')
// me는 Person.prototype을 상속 받기 때문에 getName을 사용할 수 있게 되고
// getName의 this는 me를 가리킨다
console.log(me.getName()) // Lee

Person.prototype.name = 'Kim'


// getName을 호출한 객체는 Person.prototype 이기 때문에 this 에는 Person.prototype이 바인딩 된다
console.log(Person.prototype.getName()) // Kim
