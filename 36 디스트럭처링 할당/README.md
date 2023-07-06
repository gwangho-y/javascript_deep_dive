# 디스트럭처링 할당
배열과 같은 이터러블 or 객체를 파괴하여 변수에 할당하는 것을 말한다.
배열과 객체에서 필요한 값만 추출할 수 있다.


## 배열 디스트럭처링 할당

    const arr = [1,2,3]
    // 배열 디스트럭처링 할당
    const [one, two, three] = arr
    console.log(one, two, three) // 1 2 3
    
    // 배열은 인덱스를 기준으로 순서대로 할당된다.
    const [a, b] = [1,2]
    console.log(a, b) // 1, 2
    
    // 요소의 갯수가 반드시 일치하지 않아도 된다.
    const [c, d] = [1]
    console.log(c, d) // 1 undefined
    
    // 빈 값을 넣으면 건너뛰고 계속해서 순서대로 저장한다.
    const [g, , h] = [1,2,3]
    console.log(g,h) // 1 3
    
    // 기본값도 설정 가능
    const [i, j, k= 3] = [1,2]
    console.log(i, j, k ) // 1 2 3
    // 기본값보다 할당된 값이 우선된다.
    const [l,m= 10,n= 30] = [1,2]
    console.log(l, m, n) // 1 2 30
    
    // Rest 문법도 사용할 수 있다.
    const [x, ...y] = [1,2,3]
    console.log(x, y) // 1 [ 2, 3 ]

## 객체 디스트럭처링 할당

    // 객체 디스트럭처링
    const user ={ firstName: '광호', lastName: '이'}
    const {firstName, lastName} = user
    console.log(firstName, lastName) // 광호 이
    
    // 프로퍼티키와 다른 이름으로도 선언 가능
    // 배열 디스츠럭처링과 마찬가지로 기본값 보다 할당된 값이 우선된다.
    const {firstName: fn, lastName: ln= '김'} = user
    console.log(fn, ln) // 광호 이
    
    // String 래퍼 객체에서 length 프로퍼티만 추출 가능하다
    const str = 'hello'
    const {length} = str
    console.log(length) // 5
    
    function lengthDist() {
        // 유사 배열 객체에서도 length 프로퍼티만 추출 가능하다
        const {length} = arguments
        console.log(length)
    }
    lengthDist(1,2,3) // 3


## 배열 , 객체 혼합

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