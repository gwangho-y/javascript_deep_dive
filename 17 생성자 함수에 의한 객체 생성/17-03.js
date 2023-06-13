// 객체 리터럴로 생성
// 이 방법의 단점은 circle1 하나만 생성이 되고 중복으로 circle을 여러개 만들 수 없다.
// 일반적으로 인스턴스를 생성할 때는 new 로 여러개만들수 있다고 생각했지만, 이 방법으로는 new 연산자도 사용이 불가능하다
const circle1 = {
    rarius: 5,
    getDiameter() {
        return 2 * this.rarius
    }
}

console.log(circle1.getDiameter())

// 객체 리터럴로는 new로 생성이 안 된다
// new circle1() // 에러

