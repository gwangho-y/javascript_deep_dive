# 스프레드 문법
- Array, String, Map, Set, DOM 컬렉션, argument 같은 순회 가능한 이터러블 들의 값을 펼치는 문법.
- 배열 같은 값이 뭉쳐져 있는 것들을 하나하나 펼쳐서 표현할 수 있다.
- 스프레드 문법으로 만들어 진 것들은 값이 아니라 목록이기 때문에 변수에 할당 할 수 없다


    // 순회 가능한 이터러블들은 스프레드 문법 사용 가능
    console.log(...[1,2,3]) // 1 2 3
    
    console.log(...'Hello') // H e l l o
    
    console.log(new Map([['a','1'], ['b','2']])) // Map(2) { 'a' => '1', 'b' => '2' }
    
    console.log(...new Map([['a','1'], ['b','2']])) // [ 'a', '1' ] [ 'b', '2' ]
    
    console.log(new Set([1,2,3])) // Set(3) { 1, 2, 3 }
    
    console.log(...new Set([1,2,3])) // 1 2 3
    
    // 이터러블이 아닌 일반 객체라서 스프레드 문법 사용 불가
    console.log(...{a:1,b:2,c:3})


## Rest 파라메터와의 차이
- Rest 파라메터 : 목록 => 배열
- 스프레드 문법 : 배열 => 목록

두가지는 반대되는 역할을 한다.


    function foo(...rest) {
        // Rest 파라메터를 사용했기 때문에 인자들이 배열화 된다
        console.log(rest)
    }    
    
    foo(1,2,3) // [ 1, 2, 3 ]
    
    // foo가 Rest로 인자를 배열로 받고 있기 때문에 배열을 넣으면 중첩배열이 된다.
    foo([1,2,3]) // [ [ 1, 2, 3 ] ]
    
    // 배열을 스프레드로 풀면 1,2,3이 되고 foo에서 다시 배열로 만든다
    foo(...[1,2,3]) // [ 1, 2, 3 ]  

추가로 몇가지 예제
    
    // es5 splice
    function sum() {
        const args = Array.prototype.slice.apply(arguments)
        return args.reduce((acc, cur) => acc += cur, 0)
    }
    
    // es6 스프레드
    function sum2() {
        return [...arguments].reduce((acc, cur) => acc += cur, 0)
    }
    
    // es6 Rest 파라미터
    const sum3 = (...args) => args.reduce((acc, cur) => acc += cur, 0)
    
    console.log(sum(1,2,3))  // 6
    console.log(sum2(1,2,3)) // 6
    console.log(sum3(1,2,3)) // 6


## 객체 리터럴에서 사용
처음에 스프레드 문법은 이터러블만 사용 가능하다고 했으나, 객체 리터럴의 프로퍼티도 스프레드를 사용해서 
목록화 할 수 있다.


    const obj = {x:1, y:2}
    // 얕은 복사를 사용하여 새로운 복사본 생성
    const copy = {...obj}
    
    console.log(copy)
    console.log(obj === copy) // false
    
    
    // ES6의 assign
    const merge = Object.assign({}, {x:1, y:2}, {x:3,y:10, z:4})
    console.log(merge) // { x: 3, y: 10, z: 4 }
    
    // 스프레드 문법
    const merge2 = {...{x:1, y:2}, ...{x:3,y:10, z:4}}
    console.log(merge2) // { x: 3, y: 10, z: 4 }


