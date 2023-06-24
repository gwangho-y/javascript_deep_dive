class Prefixer {
    constructor(prefix) {
        this.prefix = prefix
    }

    // 프로토타입함수

    add(arr) {
        // 클래스 내부의 모든 코드는 strict mode가 암묵적으로 적용된다.
        return arr.map(function (item) {
            // map 함수 안에도 strict mode가 적용된다.
            // strict mode에서 일반 함수로 호출된 함수 내부의 this는 전역 객체가 아니라 undefined가 바인딩 된다.
            return this.prefix + item
        })
    }

    // 인스턴스 참조를 사용할 수 있는 방법은 아래와 같다
    // add(arr) {
    //     // this를 회피시킨다
    //     const that = this
    //     return arr.map(function (item) {
    //         return that.prefix + item
    //     })
    // }

    // add(arr) {
    //     return arr.map(function (item) {
    //         return this.prefix + item
    //     }, this) // this에 바인딩된 값이 콜백함수 내부의 this에 바인딩 된다.
    // }

    // add(arr) {
    //     return arr.map(function (item) {
    //         return this.prefix + item
    //     }.bind(this)) // this에 바인딩된 값이 콜백함수 내부의 this에 바인딩 된다.
    // }

    // 화살표 함수로 처리
    // add(arr) {
    //     return arr.map(item => this.prefix + item)
    // }
}

const prefix = new Prefixer('-webkit-')

// undefined가 바인딩 된 오브젝트, this.prefix 는 사실 undefined.prefix다
console.log(prefix.add(['transition', 'user-select'])) // TypeError: Cannot read properties of undefined (reading 'prefix')
