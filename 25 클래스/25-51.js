class Person {
    // private도 선언 가능하다
    #name = ''

    constructor(name) {
        this.#name = name
    }

    get getName() {
        return this.#name.trim()
    }
}

const me = new Person('Lee')

console.log(me.name) // undefined
console.log(me.getName) // Lee

