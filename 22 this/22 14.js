const person = {
    name: 'Lee',

    // getName이 가리키는 함수 객체는 person 객체가 아니라 독립적으로 존재하는 별도의 객체다.
    // 그저 함수를 호출한 객체를 가리키는 것일 뿐이다.
    getName() {
        // 메서드 내부의 this는 메서드를 호출한 객체에 바인딩된다.
        return this.name
    }
}

console.log(person.getName()) // Lee


const anotherPerson = {
    name: 'Kim'
}

anotherPerson.getName = person.getName

// anotherPerson에서 getName을 호출하면 getName의 this는 anotherPerson을 가리킨다
console.log(anotherPerson.getName()) // Kim