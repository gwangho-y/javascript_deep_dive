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