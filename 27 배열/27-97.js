[1, 2, 3].forEach((item, index, arr)=> {
    console.log(`요소값 : ${item}, 인덱스: ${index}, this : ${JSON.stringify(arr)}`)
})
// 요소값 : 1, 인덱스: 0, this : [1,2,3]
// 요소값 : 2, 인덱스: 1, this : [1,2,3]
// 요소값 : 3, 인덱스: 2, this : [1,2,3]


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
