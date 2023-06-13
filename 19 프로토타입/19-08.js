const parent = {}
const child = {}

child.__proto__ = parent

// 서로가 자신의 프로토타입이 되는 것은 허용되지 않는다.
parent.__proto__ = child // TypeError: Cyclic __proto__ value

