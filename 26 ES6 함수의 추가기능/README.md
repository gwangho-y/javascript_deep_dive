# ES6 함수의 추가기능
## 화살표 함수와 일반 함수의 차이
- 화살표 함수는 생성자 함수 호출이 불가능하다. 고로 프로토타입도 생성하지 않는다
- 중복된 매개 변수 이름을 갖지 않는다
- 화살표 함수는 함수자체의 this, arguments, super, new.target 바인딩을 갖지 않는다<br>
  this, arguments, super, new.target을 참조하면 스코프 체인을 통해 상위 스코포의 this, arguments, super, new.target를 참조한다.

## 화살표 함수의 this
화살표 함수의 this와 일반함수 this는 다르게 동작한다.
"**콜백함수 내부의 this 문제**" 를 해결하기 위해 일부로 설계된 것이다.
this 바인딩은 22장 this에서 봤다시피 자신을 호출한 객체에 동적으로 바인딩된다.<br/>
주의할 것은 일반 함수로서 호출되는 콜백함수다.<br/>
고차 함수의 인수로 전달되어 고차 함수의 내부에서 호출되는 콜백 함수도 중첩 함수라고 할 수 있다.

아래 예제를 보자 

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

    const prefix = new Prefixer('-webkit-')
    
    // undefined가 바인딩 된 오브젝트, this.prefix 는 사실 undefined.prefix다
    console.log(prefix.add(['transition', 'user-select'])) // TypeError: Cannot read properties of undefined (reading 'prefix')

이 코드는 결과적으로 TypeError 에러가 출력된다. 이유는 아래와 같다
1. 클래스 내부의 모든 코드는 엄격모드가 암묵적으로 적용된다.
2. 엄격모드에서 일반 함수로 호출된 함수 내부의 this는 전역 객체가 아니라 undefined가 반영된다

add 메서드를 화살표 함수로 변경해주면 "**콜백함수 내부의 this 문제**"를 해결할 수 있다.

    // 화살표 함수로 처리
    add(arr) {
        return arr.map(item => this.prefix + item)
    }

화살표 함수 말고도 몇개 있다.
- this 회피  

        // add(arr) {
        //     // this를 회피시킨다
        //     const that = this
        //     return arr.map(function (item) {
        //         return that.prefix + item
        //     })
        // }

- 명시적 this 바인딩

        add(arr) {
            return arr.map(function (item) {
                return this.prefix + item
            }, this) // this에 바인딩된 값이 콜백함수 내부의 this에 바인딩 된다.
        }
    
        add(arr) {
            return arr.map(function (item) {
                return this.prefix + item
            }.bind(this)) // this에 바인딩된 값이 콜백함수 내부의 this에 바인딩 된다.
        }

이것이 가능한 이유는 화살표 함수는 **함수자체의 this 바인딩을 갖지 않기 때문**이다.<br/>
화살표 함수 내부에서 this를 사용하면 상위의 스코프를 참조한다.
호출된 위치가 아니라 렉시컬 스코프처럼 정의된 위치에 상위의 this를 참조하는 것이다.
그렇기 때문에 만약 중첩함수로 화살표 함수를 사용했다면 화살표 함수는 상위의 this를 참조한다.
예제를 보자


    const object = {
      a : 1
    };

    // 화살표 함수는 함수 자체의 this 바인딩을 갖지 않는다
    // 중첩함수로 2중으로 들어가 있더라도 화살표 함수는 항상 상위의 this를 참조한다.
    // 고로, 즉시 실행함수의 this를 참조한다.
    (function () {
      const bar = () => () => console.log(this);
      bar()()
    }).bind(object)()

즉시실행 함수의 this는 bind를 사용하여 object가 바인딩 되어 있다.
bar 함수는 이중으로 화살표 함수를 사용했음에도 즉시실행 함수의 this를 참조하고 있다.


