const person = {}

// 데이터 프로퍼티 정의
Object.defineProperty(person, 'firstName', {
    value: '광호',
    writable: true,
    enumerable: true,
    configurable: true
})

// 기본 값은 전부 false다
// 즉, 삭제 변경이 불가능하다.
Object.defineProperty(person, 'lastName', {
    value: '이'
})

let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName')
console.log(descriptor) // { value: '광호', writable: true, enumerable: true, configurable: true }

descriptor = Object.getOwnPropertyDescriptor(person, 'lastName')
console.log(descriptor) // { value: '이', writable: false, enumerable: false, configurable: false }


// 접근자 프로퍼티 정의
Object. defineProperty(person, 'fullName', {
    //getter 함수
    get() {
        return `${this.firstName} ${this.lastName}`
    },

    // setter
    set(name) {
        [this.firstName, this.lastName] = name.split('')
    },
    enumerable: true,
    configurable: true
})


descriptor = Object.getOwnPropertyDescriptor(person, 'fullName')
console.log(descriptor)
// {
//   get: [Function: get],
//   set: [Function: set],
//   enumerable: true,
//   configurable: true
// }