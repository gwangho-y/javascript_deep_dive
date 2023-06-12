const person = {
    // 데이터 프로퍼티
    firstName: '광호',
    lastName: '이',

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    },

    set fullName(name) {
        [this.firstName, this.lastName] = name.split(' ')
    }
}

// 데이터 프로퍼티를 통한 프로퍼티 값 참조
console.log(person.firstName +  ' ' + person.lastName )

// 접근자 프로퍼티를 통한 프로퍼티 값 저장
// 저장을 시도하면 자동으로 setter가 호출된다.
person.fullName = 'gwangho yi'

// 접근자 프로퍼티를 통한 값 참조
// 참조를 시도하면 자동으로 getter가 호출된다
console.log(person.fullName) // gwangho yi
console.log(person) // { firstName: 'gwangho', lastName: 'yi', fullName: [Getter/Setter] }

// firstName은 데이터 프로퍼티다

let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName')
console.log(descriptor)
