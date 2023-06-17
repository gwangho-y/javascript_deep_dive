function People(name) {
    this.name = name
}

People.prototype.sayHello = function () {
    return `안녕, 난 ${this.name}라고 해!`
}


const people = new People("김똘비")
const people2 = new People("동네꼬마")

console.log(people.sayHello()) // 안녕, 난 김똘비라고 해!
console.log(people2.sayHello()) // 안녕, 난 동네꼬마라고 해!

console.log(people.sayHello === people2.sayHello) // true



