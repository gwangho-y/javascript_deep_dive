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

    const fruits = ['Banana', 'Orange', 'Apple'];
    fruits.sort()
    console.log(fruits) // [ 'Apple', 'Banana', 'Orange' ]


    const numbers = [5,3,1,4,2]
    numbers.sort()
    console.log(numbers) // [ 1, 2, 3, 4, 5 ]

문제는 