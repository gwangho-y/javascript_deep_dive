var var1= 1;
if (true) {
    var var2 = 2;
    if (true) {
        var var3 = 3;
    }
}

function foo() {
    var var4 = 4;

    function bar() {
        var var5 = 5;
    }
}

console.log(var1)
console.log(var2)
console.log(var3)
console.log(var4)  // 함수 내부에서는 외부로 스코프가 잡히지 않는다
console.log(var5)