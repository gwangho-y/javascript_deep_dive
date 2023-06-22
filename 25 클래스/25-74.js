class Rectangle {
    constructor(width, height) { // 수퍼 클래스는 서브클래스의 인스턴스 생성을 위임 받는다
        // 암묵적으로 빈 인스턴스가 생성되고 this에 바인딩된다
        console.log(this) // ColorRectangle {}
        // new 연산자로 호출된 함수, 즉 new target은 ColorRectangle이다
        console.log(new.target) // [class ColorRectangle extends Rectangle]

        // 생성된 인스턴스의 프로토타입은 ColorRectangle.prototype이 설정된다.
        console.log(Object.getPrototypeOf(this) === ColorRectangle.prototype) // true
        this.width = width
        this.height = height
    }

    getArea() {
        return this.width * this.height
    }

    toString() {
        return `width = ${this.width}, height = ${this.height}`
    }
}

class ColorRectangle extends Rectangle {
    // 서브 클래스는 수퍼 클래스에게 인스턴스 생성을 위임한다.
    // 그렇기 때문에 수퍼 클래스에 접근하는 super를 호출해야한다.
    constructor(width, height, color) {
        super(width, height); // 수퍼클래스의 constructor에 인수 전달
        // 수퍼클래스가 생성한 인스턴스가 반환되며, this에 바인딩된다.
        // 수퍼가 호출 되지 않으면 인스턴스가 생성되지 않는다. super를 호출하기 전까지는 this를 참조할 수 없는 이유가 이것 때문이다.
        console.log(this) // ColorRectangle { width: 2, height: 4 }

        this.color = color
    }

    // 메서드 오버라이딩
    toString() {
        return super.toString() + `, color = ${this.color}`;
    }
}


const colorRectangle = new ColorRectangle(2,4, 'red')
console.log(colorRectangle) // ColorRectangle { width: 2, height: 4, color: 'red' }


