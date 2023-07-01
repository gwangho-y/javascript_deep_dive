function foo(...rest) {
    console.log(rest)
}

foo(1,2,3,4,5) // [ 1, 2, 3, 4, 5 ]


function bar(x, ...rest) {
    console.log(x)
    console.log(rest)
}

bar(1,2,3,4,5)
// 1
// [ 2, 3, 4, 5 ]


// function bar2(...rest, x) {
//     console.log(rest)
//     console.log(x)
// }
//
// // SyntaxError: Rest parameter must be last formal parameter
// // rest 파라메터는 반드시 마지막에 선언되어야한다.
// bar2(1,2,3,4,5)