function Circle(radius) {
    // this : Circle 생성자 함수가 생성할 인스턴스를 가리킨다
    this.radius = radius
}

Circle.prototype.getDiameter = function () {
    // this : Circle 생성자 함수가 생성할 인스턴스를 가리킨다
    return 2 * this.radius
};

console.log(Circle.prototype)


const circle = new Circle(5)

console.log(circle.getDiameter())