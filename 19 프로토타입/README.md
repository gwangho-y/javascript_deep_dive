# 프로토타입이란
자바스크립트는 프로토타입을 기반으로 상속을 구현한다. <br/>
프로토타입을 사용해서 상속 받고자 하는 객체를 지정해 줄 수 있다. <br/>

프로토 타입으로 상속을 지정해주는 방법은 몇가지가 있는데 책에서는 세가지 방식을 강조한다.
1. 생성자함수.prototype 
2. 객체.\__proto\__
3. getPrototypeOf, setPrototypeOf


### 생성자함수.prototype
생성자함수.prototype : 생성할 인스턴스에 상속받을 객체나 프로퍼티를 지정 할 수 있다.

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




프로토 타입을 사용하면서 얻는 이점은 같은 객체 안에 있는 메서드를 공유하는 것이기 때문에 메모리를 절약할 수 있다.
생성자 함수 안에 정확히 같은 일을 하는 메서드가 있는데 각각 하나씩 생성되고 있다면 메모리 낭비로 이어진다.







그럼 프로토타입은 상속할 부모를 얘기하는거냐?
아니다 프로토타입은 생성자 함수에서 나온 하나의 객체다.
