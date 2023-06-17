function Person(name) {
    this.name = name
}


const me = new Person('Lee')

console.log(Person.prototype === me.__proto__) // true


function Parent(name) {
    this.name = name
}

// 위에꺼 도저히 이해가 안 감


// 그래서 밑에꺼 만듬
function Child(name) {
    this.name = name
}

// 생성자함수객체.prototype 의 쓰임새는 생성자함수가 만들어낼 인스턴스가 상속받을 프로토타입(클래스, 객체)에 접근하기 위해서구나
Child.prototype = new Parent('엄마')

const child  = new Child('아들')


console.log(Child.prototype) // Parent { name: '엄마' }
console.log(child.__proto__) // Parent { name: '엄마' }



// __proto__는 이미 생성된 객체(인스턴스)가 가지고 있는 프로토타입에 접근하기 위해서
// 즉, 상속받은 프로토타입 (클래스)에 접근하기 위해서 사용하는 거구나

// 결론은 둘은 각은 프로토타입 객체를 가리킨다
console.log(child.__proto__ === Child.prototype) // true



