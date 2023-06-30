// 1부터 4까지 값 누적
const sum = [1,2,3,4].reduce((acc, curr, idx, arr)=> acc + curr, 0)
// console.log(sum) // 10

// 평균 구하기



// 요소의 중복 횟수 구하기
const fruits = ['banana', 'apple', 'apple', 'orange', 'orange']
const count = fruits.reduce((acc, cur) => {
    return Object.assign(acc,{[cur] : (acc[cur] ? acc[cur] || 0 : 0) + 1} )
},{})
console.log(count) // { banana: 1, apple: 2, orange: 2 }
