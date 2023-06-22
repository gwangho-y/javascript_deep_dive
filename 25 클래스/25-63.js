// 수퍼 클래스
class Base {
    constructor(a, b) {
        this.a=a
        this.b=b
    }
}

class Derived extends Base {
    // 수퍼클래스에서 만든 프로퍼티를 그대로 사용하고자 한다면 constructor를 생략하면 된다.
    // 암묵적으로 constructor가 정의된다
    // constructor(...args) {
    //     super(...args); // 수퍼 클래스의 constructor에 인수들이 전달된다.
    // }
}

const derived = new Derived(1,2)
console.log(derived) // Derived { a: 1, b: 2 }
