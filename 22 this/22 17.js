// 생성자 함수의 this는 미래에 생성할 인스턴스를 가리킨다
function Person(name) {
    this.name = name
    this.getName = function () {
        return this.name
    };
}

const person1 = new Person('Lee')
const person2 = new Person('Kim')

console.log(person1.getName()) // Lee
console.log(person2.getName()) // Kim