# 프로토타입이란
자바스크립트는 프로토타입을 기반으로 상속을 구현한다. <br/>
프로토타입을 사용해서 상속 받고자 하는 객체를 지정해 줄 수 있다. <br/>

프로토 타입으로 상속을 지정해주는 방법은 몇 가지가 있는데 책에서는 세가지 방식을 강조한다.
1. 생성자함수.prototype 
2. 객체.\__proto\__
3. getPrototypeOf, setPrototypeOf


### 생성자함수.prototype
생성자함수.prototype : 생성할 인스턴스에 상속받을 객체나 프로퍼티를 지정 할 수 있다.

    function People(name) {
        this.name = name
    }
    
    // People 생성자 함수로 생성 될 인스턴스들이 상속받고 공통으로 사용될 프로퍼티를 지정
    People.prototype.sayHello = function () {
        return `안녕, 난 ${this.name}라고 해!`
    }
    
    const people = new People("김똘비")
    const people2 = new People("동네꼬마")
    
    console.log(people.sayHello()) // 안녕, 난 김똘비라고 해! 
    console.log(people2.sayHello()) // 안녕, 난 동네꼬마라고 해!
    
    // 같은 메서드를 공유한다
    console.log(people.sayHello === people2.sayHello) // true




프로토 타입을 사용하면서 얻는 이점은 같은 객체 안에 있는 메서드를 공유하는 것이기 때문에 메모리를 절약할 수 있다.
생성자 함수 안에 정확히 같은 일을 하는 메서드가 있는데 각각 하나씩 생성되고 있다면 메모리 낭비로 이어진다. <br>
아래의 예시를 보면 생성자 함수 안에 메서드를 만들고 인스턴스를 생성했을 때 인스턴스의 sayHello 메서드들을 서로 같지 않다는 것을 볼 수 있다.
이것은 각각의 인스턴스 안에 메서드들이 별개로 생성되 었음을 알 수 있다.

    function People(name) {
        this.name = name
        this.sayHello = function () {
            return `안녕, 난 ${this.name}라고 해!`
        }
    }
    
    const people = new People("김똘비")
    const people2 = new People("동네꼬마")
    
    console.log(people.sayHello()) // 안녕, 난 김똘비라고 해!
    console.log(people2.sayHello()) // 안녕, 난 동네꼬마라고 해!
    
    // 서로 다른 메서드다. 
    console.log(people.sayHello === people2.sayHello) // false



### 객체.\__proto\__
자바스크립트의 모든 객체들은 proto 를 사용해서 자신의 프로토 타입에 접근할 수 있다. <br/>
proto 키워드를 사용해서 자신의 프로토타입을 참조, 수정할 수 있다.<br/>
모든 객체들이기 때문에 객체 리터럴로 생성된 객체도 자신의 프로토타입을 지정해 줄 수 있다.

   
    const obj = {}
    const parent = {x:1}
    
    // getter 함수인 get __proto__ 가 호출된다
    obj.__proto__
    // setter 함수인 set __proto__ 가 호출된다
    // setter를 통해 상속을 내가 시켜 줄수도 있구나
    obj.__proto__ = parent
    
    
    console.log(obj.__proto__) // { x: 1 }
    // 싱기방기
    console.log(obj.x) // 1



생성자함수.prototype와 인스턴스.\__proto\__ 는 서로 같은 프로토타입을 공유 하고 있다.

    function Person(name) {
        this.name = name
    }
    
    
    const me = new Person('Lee')
    
    console.log(Person.prototype === me.__proto__) // true

더 깊게 보면 
- Person 생성자 함수의 prototype 프로퍼티는 Person.prototype 객체를 가지고 있다. <br>
- Person.prototype 객체는 constructor 라는 프로퍼티는 Person을 가리키고 있다.
- me.\__proto\__ 은 Person.prototype을 가리키고 있다.

즉, Person.prototype가 Person과 me 사이를 이어주고 있고 프로토타입 객체로 인해 생성자 함수와 객체가 서로 연결되어 있다는 것을 알 수 있다.



    function Person(name) {
        this.name = name
    }
    
    const me = new Person('Lee')

    console.log(Person.prototype === me.__proto__) // true
