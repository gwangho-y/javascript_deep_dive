const array = [{
    name:'이광호'
}]
const [{name}] = array
console.log(name) // 이광호

const todo = [
    { id : 1 },
    { id : 2 },
    { id : 3 },
]
// 순서대로 할당하기 때문에 건너뛰어서 할당할 수 있다.
const [, {id}] = todo
console.log(id) // 2


const user = {
    name: '이광호',
    address: {
        city: '서울'
    }
}
// 중첩 객체도 할당 가능하다.
const {address:{city}} = user
console.log(city) // 서울

// rest 프로퍼티로도 할당 가능
const {x, ...rest} = {x:1, y:2, z:3}
console.log(x, rest) // 1 { y: 2, z: 3 }


