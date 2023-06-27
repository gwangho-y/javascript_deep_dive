const fruits = ['Banana', 'Orange', 'Apple'];
fruits.sort()
console.log(fruits) // [ 'Apple', 'Banana', 'Orange' ]

const numbers = [5,3,1,4,2]
numbers.sort()
console.log(numbers) // [ 1, 2, 3, 4, 5 ]



console.log([2,10].sort()) // [ 10, 2 ]
console.log(["2","10"].sort()) // [ '10', '2' ]

const points = [40, 100, 1, 5, 2, 25, 10]
points.sort((a,b) => a - b)
console.log(points) // [ 1, 2, 5, 10, 25, 40, 100 ]


points.sort((a,b) => b - a)
console.log(points) // [100, 40, 25, 10, 5, 2, 1]

