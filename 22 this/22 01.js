
// 1. 객체 리터럴이 평가된다.
// 2. circle 변수에 저장된다.
const circle = {
    radius: 5,
    // 3. 메서드가 호출, 실행 될 때는 circle이 이미 생성되었기 때문에 circle.radius를 참조할 수 있다.
    getDiameter() {
        return 2 * circle.radius;
    }
}

console.log(circle.getDiameter())


function Circle(radius) {
    // getDiameter과 같은 함수는 호출 시점에 참조를 평가 하기 때문에 객체 이름을 참조 할 수 있지만 this가 없다면 인스턴스에 값을 할당할 방법이 없다.
    // ????.radius = radius
}