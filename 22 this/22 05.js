


// 브라우저에서는 window를 가리킨다
console.log(this)

function 일반함수() {
    // 일반 함수 내보에서도 this는 window를 가리킨다
    console.log(this)
}

const 화살표함수 = () => {
    // 화살표 함수도 window를 가리킨다
    // 화살표 함수는 상위 스코프의 this를 가리킨다
    console.log(this)
}

const person = {
    name: 'Lee',
    getName() {
        // 메서드 내부에서 this는 메서드를 호출한 객체를 가리킨다
        console.log(this) // { name: 'Lee', getName: [Function: getName] }
        return this.name
    }
}

// 일반함수()
화살표함수()

console.log(person.getName())

function  Person (name) {
    this.name = name
    // 생성자 내부의 this는 생성자 함수가 생성할 인스턴스 가리킨다
    console.log(this)
}

new Person('Lee')