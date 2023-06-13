# 17.2.2 생성자 함수에 의한 객체 생성 방식의 장점
- 객체 리터럴로 생성하는 것보다 편리하게 여러개의 인스턴스를 생성할 수 있다.
- new 연산자를 사용해 호출하면 함수가 생성자 함수로 동작한다.
- new로 호출하지 않으면 일반 함수로 동작한다


    function Circle(radius) {
        // 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스 즉, 자기 자신을 가리킨다.
        this.radius = radius;
        this.getDiameter = function () {
            return 2 * this.radius
        };
    }
    
    const circle1 = new Circle(5);
    const circle2 = new Circle(10);
    
    console.log(circle1.getDiameter()); // 10
    console.log(circle2.getDiameter()); // 20
    
    
    // new 연산자로 호출 하지 않으면 일반 함수로 호출된다
    const circle3 = Circle(15)
    
    // 일반 함수로 호출된  Circle은 반환문이 없어서 undefined를 반환한다.
    console.log(circle3) // undefined
    
    // 일반 함수로 호출된 Circle 안의 this는 전역 객체를 가리킨다.
    // 일반 함수 안에서 this 를 사용하면 함수 바깥의 전역객체를 가리킨다.
    console.log(radius)


# 17.2.3 생성자 함수의 인스턴스 생성 과정

**생성자 함수의 역할**
- 인스턴스를 생성하기 위한 템플릿(클래스)로서 동작.
- 인스턴스를 생성 / 초기화 하는 것.



### 1. 인스턴스 생성과 this 바인딩
- 암묵적으로 빈 객체가 생성된다.
- 생성된 빈 객체는 this에 바인딩 된다. this는 바로 생성된 인스턴스를 뜻한다.
- 이 처리는 함수 몸체의 코드가 한 줄씩 실행 되는 런타임 인전에 실행된다.
    
        function Circle () {
            console.log(this) // Circle ()
        }

### 2. 인스턴스 초기화
- this에 바인딩 되어 있는 인스턴스를 초기화한다
- 인스턴스에 프로퍼티 / 메서드등 초기화 할 값을 할당하는 것은 개발자가 하면된다.


### 3. 인스턴스 반환
- 생성자 함수 내부에서 모든 처리가 끝나면 바인딩된 this를 암묵적으로 return한다.

        function Circle(radius) {
            // 1. 암묵적으로 빈 객체가 생성되고 this에 바인딩 된다.
    
            // 2. this에 바인딩 되어 있는 인스턴스를 초기화한다.
            this.radius = radius;
            this.getDiameter = function () {
                return 2 * this.radius
            };
    
            // 3.완성된 인스턴스가 바인딩 되어 잇는 this가 암묵적으로 return 된다.
        }


- this가 아닌 다른 객체를 명시적으로 반환하면 return 문에 명시한 객체가 반환된다.

        function Circle(radius) {
            
            ....
            ....
            // 명시적으로 반환하면, this 바인딩은 무시된다.
            return {}
        }

        const circle = new Circle(1);
        console.log(circle) // {}

- 명시적으로 원시 값을 반환하면 원시값 return은 무시되고 암묵적 this가 반환된다.


# 17.2.4 내부 메서드 [[Call]] 과 [[Construct]]
- 함수는 객체이므로 일반 객체와 동일하게 동작 가능하다.
- 또한 함수는 일반 객체와는 다르게 함수로서의 호출도 가능하다.
- 함수를 일반 함수로 호출하면 내부 메서드 [[Call]]이 호출된다.
- 함수를 new 연산자로 호출하면 생성자 함수로 호출되서 [[Construct]]가 호출된다.

        function foo() {}


        // 일반적인 함수로서 호출 : [[Call]]이 호출된다
        foo()
        
        // 생성자 함수로서 호출 : [[Construct]] 호출된다
        new foo()
- 함수 객체는 callable 이면서 constructor 이거나,  callable 이면서 non-constructor이다<br>
    즉, 모든 함수 객체는 호출 할 수 있지만, 모든 함수 객체를 생성자 함수로 호출가능한 것은 아니다



# 17.2.5 constructor와 non-constructor구분
함수가 정의된 방식에 따라 함수를 constructor함수와 non-constructor 함수로 구별한다.
- constructor : 함수 선언문, 함수 표현식, 클래스(클래스도 함수)
- non-constructor : 메서드(ES6 메서드 축약표현) , 화살표 함수


    // 일반 함수 정의 : 함수 선언문, 함수 표현식
    function foo() {}
    const bar = function () {}

    // 프로퍼티 x의 값에 할 당된 함수는 일반 함수로 정의된 함수. 고로 메서드로 인정되지 않는다.
    const baz = {
        x: function() {}
    }
