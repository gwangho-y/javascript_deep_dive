## 자바스크립트 배열은 배열이 아니다
밀집 배열 : 동일한 크기의 메모리 공간이 빈틈 없이 연속적으로 나열된 자료 구조<br/>
희소 배열 : 동일하지 않은 메모리 공간을 갖고, 연속적으로 이어져 있지 않다.

자바스크립트는 희소배열을 사용한다. 자바스크립트의 배열은 일반적인 배열의 동작을 흉내 낸 특수한 객체다.

자바스크립트의 배열은 인덱스를 나타내는 문자열을 프로퍼티로 가지며, length 프로퍼티를 갖는 특수한 객체다.

    console.log(Object.getOwnPropertyDescriptors([1,2,3]))
    
    // {
    //     '0': { value: 1, writable: true, enumerable: true, configurable: true },
    //     '1': { value: 2, writable: true, enumerable: true, configurable: true },
    //     '2': { value: 3, writable: true, enumerable: true, configurable: true },
    //     length: { value: 3, writable: true, enumerable: false, configurable: false }
    // }


또한 배열의 요소들은 사실 프로퍼티 값이며, 모든 값은 프로퍼티가 될 수 있으므로 어떠한 타입의 값도 배열의 요소가 될 수 있다.

### 자바스크립트 배열과 일반 적인 배열의 성능적 차이점
일반적인 배열
- 일반적인 배열은 인덱스로 요소에 빠르게 접근이 가능하다. 
- 하지만 요소의 삽입 삭제는 느리다

자바스크립트 배열
- 자바스크립트 배열은 해시 테이블로 구현된 객체이므로, 인덱스로 요소에 접근 시 일반적인 배열보다 느리다
- 하지만 요소를 삽입 삭제하는 경우 일반적인 배열보다 빠르다

## 배열 고차함수
**고차 함수란?**
- 함수를 인수로 전달 받거나, 함수를 반환하는 함수.
- 함수는 일급 객체이므로 인수로 전달하거나 반환 가능하기 때문
- 외부 상태의 변경이나 가변 데이터를 피함으로 불변성을 이향하는 함수형 프로그래밍에 기반.

**배열 고차 함수?**<br/>
배열용으로 사용하는 고차함수겠지?

배열 고차함수의 종류
- sort
- **foreach**
- **map**
- **filter**
- **reduce**
- find
- findIndex
- flatMap
- some
- every


### sort
배열의 요소를 정렬한다. 원본배열을 직접 변경한다. 기본적으로 오름차순으로 정렬한다.
sort의 알고리즘은 quicksort 알고리즘에서 timsort 알고리즘으로 변경되었다.

    const fruits = ['Banana', 'Orange', 'Apple'];
    fruits.sort()
    console.log(fruits) // [ 'Apple', 'Banana', 'Orange' ]


    const numbers = [5,3,1,4,2]
    numbers.sort()
    console.log(numbers) // [ 1, 2, 3, 4, 5 ]


특이한 점은 sort는 모든 요소를 문자열로 변환 한 후 유니코드 포인트의 순서를 기준으로 정렬한다.<br/>
문제는 문자 10의 경우 유니코드 포인트가 숫자 2보다 앞서기 때문에 10이 2보다 앞선다는데 있다.


    console.log([2,10].sort()) // [ 10, 2 ]
    console.log(["2","10"].sort()) // [ '10', '2' ]  

따라서 정렬 순서를 정의하는 비교 함수를 인수로 전달해야한다.


    const points = [40, 100, 1, 5, 2, 25, 10]
    points.sort((a,b) => a - b)
    console.log(points) // [ 1, 2, 5, 10, 25, 40, 100 ]
    
    
    points.sort((a,b) => b - a)
    console.log(points) // [100, 40, 25, 10, 5, 2, 1]



### foreach
for문 대체 가능한 고차함수다.
map과는 다르게 반환값은 undefined다.
foreach 메서드의 콜백함수는 foreach 메서드를 호출한 배열의 요소값, 인덱스, 호출한 배열(this)를 순차적으로 전달받는다.

    [1, 2, 3].forEach((item, index, arr)=> {
        console.log(`요소값 : ${item}, 인덱스: ${index}, this${JSON.stringify(arr)}`)
    })
    // 요소값 : 1, 인덱스: 0, this : [1,2,3]
    // 요소값 : 2, 인덱스: 1, this : [1,2,3]
    // 요소값 : 3, 인덱스: 2, this : [1,2,3]



만약 콜백함수에서 this를 사용하고 싶다면 foreach의 인자로 this를 넣어주거나 화살표 함수를 사용한다.


    // 콜백 함수에 this를 전달 하고 싶다면 인수로 전달해주면된다.
    class Numbers {
    numberArray = []
    
        // multiply(arr) {
        //     arr.forEach(function (item) {
        //         this.numberArray.push(item * item)
        //     }, this)
        // }
    
        multiply(arr) {
            arr.forEach((item) => {
                this.numberArray.push(item * item)
            })
        }
    }
    
    const numbers = new Numbers()
    numbers.multiply([1,2,3])
    console.log(numbers.numberArray)// [ 1, 4, 9 ]


일반 함수의 this에는 전역객체가 바인딩된다. 하지만 class는 암묵적으로 strict mode가 적용되고 엄격모드에서 일반함수의 this에는
undefined가 바인딩 되기 때문에 this는 사용하지 못 한다.<br/>
그렇기 때문에 foreach의 내부를 보면 this를 인자 값으로도 받을 수 있게 작성되어 있다.

    forEach(callbackfn: (value: T, index: number, array: readonly T[]) => void, thisArg?: any): void;


희소 배열의 경우 값이 없으면 대상에서 제외된다.


### map
foreach처럼 배열의 모든 요소를 순회하며 전달 받은 콜백 함수를 반복 호출한다.<br/>
foreach와 다르게 콜백 함수의 반환 값들로 구성된 **새로운 배열을 반환**한다. 원본 배열은 변경되지 않는다.

map이 생성하여 반환하는 새로운 배열의 length 값은 처음에 map을 호출한 배열의 length 값과 반드시 일치한다.<br>
즉, **map을 호출한 배열과, map이 생성한 배열은 1:1 매핑**한다.

    [1, 2, 3].map((item, index, arr)=> {
        console.log(`요소값 : ${item}, 인덱스: ${index}, this : ${JSON.stringify(arr)}`)
        // 요소를 return 시켜줘야한다.
        return item
    })


### filter
콜백 함수의 반환 값이 true인 요소로만 구성된 새로운 배열을 반환한다.
원본 배열은 변경되지 않는다. 

filter 메서드가 생성하여 반환한 배열의 length는 원본 배열의 length보다 같거나 작다.
왜냐하면 true인 요소들만 뽑아서 반환하기 때문이다.