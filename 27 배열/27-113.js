// 1부터 4까지 값 누적
const sum = [1,2,3,4].reduce((acc, curr, idx, arr)=> acc + curr, 0)
console.log(sum) // 10

// 평균 구하기
const values = [1,2,3,4,5,6]
const average = values.reduce((acc, curr, i, { length }) => {
        return i === length - 1 ? (acc + curr) / length : acc+curr
    }, 0)

console.log(average) // 3.5


// 요소의 중복 횟수 구하기
const fruits = ['banana', 'apple', 'orange', 'orange', 'apple']
const count = fruits.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1
    return acc
}, {})

console.log(count) // { banana: 1, apple: 2, orange: 2 }
