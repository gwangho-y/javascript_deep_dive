function getThisBinding() {
    console.log(arguments)
    return this
}

const thisArg = {a:1}


// [Arguments] { '0': 1, '1': 2, '2': 3 }
// { a: 1 }
// apply 메서드는 호출할 함수의 인수를 배열로 묶어 전달한다.
console.log(getThisBinding.apply(thisArg, [1,2,3]))

// [Arguments] { '0': [ 1, 2, 3 ] }
// { a: 1 }
// call 메서드는 호출할 함수의 인수를 쉼표로 구분한 리스트 형식으로 전달한다.
console.log(getThisBinding.call(thisArg, [1,2,3]))
