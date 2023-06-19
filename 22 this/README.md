# this
## this란??
**자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 자기 참조 변수**다.<br/>

    function Circle(radius) {
        // this : Circle 생성자 함수가 생성할 인스턴스를 가리킨다
        this.radius = radius
    }
    
    Circle.prototype.getDiameter = function () {
        // this : Circle 생성자 함수가 생성할 인스턴스를 가리킨다
        // 정확히는 getDiameter 메서드를 호출한 객체를 가리킨다.
        return 2 * this.radius
    };   
    
    const circle = new Circle(5)
    
    console.log(circle.getDiameter()) // 10


## this 바인딩
자바 같은 클래스 기반 언어세너 this는 언제나 클래스가 생성하는 인스턴스를 가리킨다. <br/>
하지만 JS는 함수가 호출되는 방식에 따라 this에 바인딩 될 값이 동적으로 결정된다. <br/>
**this가 가리킬 객체를 바인딩 하는 것**을 this 바인딩이라고 한다
어떤 함수 안에서 this가 선언되었는에 따라 서로 다른 것을 가리킨다.
- 생성자 함수에서의 this
- 일반 함수에서의 this


### 생성자 함수의 this 
생성자 함수 내부의 this는 **미래에 생성될 인스턴스를 가리킨다.**

    function  Person (name) {
        this.name = name
        // 생성자 내부의 this는 생성자 함수가 생성할 인스턴스 가리킨다
        console.log(this)
    }

    new Person('Lee') // Person { name: 'Lee' }


### 일반 함수의 this 
일반 함수의 this는 **자신을 호출한 객체를 가리킨다** <br/>
전역에서 호출하였으면 this는 전역을 가리킨다.



    const foo = function () {
        console.dir(this)
    };
    
    // 일반 함수의 this 는 전역을 가리킨다
    // foo() // window || global
    
    // 메서드 호출
    const obj = {
        name: '오브젝트',
        foo
    }
    // 메서드로 호출된 foo의 this는 메서드를 호출한 객체 obj를 가리킨다
    obj.foo() // { foo : ƒ (),  name : "오브젝트" }

obj.foo() 를 보면 객체의 메서드로서 호출되고 foo의 this는 obj를 가리키고 있다.


아래의 예제를 보면 getName의 this는 person 안에 선언 됐음에도 불구하고 anotherPerson이 호출하면 anotherPerson을 가리키고 있다.
<br/>
this 바인딩은 함수의 호출 시점에 따라 동적으로 변한다는 것을 알 수 있다.

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


일반 함수의 this는 프로토타입에도 동일하게 적용된다.

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