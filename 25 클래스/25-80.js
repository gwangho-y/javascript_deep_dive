class MyArray extends Array {
    // 배열에 중복된 요소를 제거하고 반환
    uniq() {
        return this.filter((v,i,self) => self.indexOf(v)===i)
    }
    // 모든 배열 요소의 평균을 구한다
    average() {
        return this.reduce((pre, cur) => pre + cur, 0)
    }
}

const myArray = new MyArray(1,1,2,3)
console.log(myArray) // MyArray(4) [ 1, 1, 2, 3 ]

console.log(myArray.uniq()) // MyArray(3) [ 1, 2, 3 ]
console.log(myArray.average())// 7
