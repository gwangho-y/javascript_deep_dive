 /*
    중첩함수 === 헬퍼함수
    중첩 함수는 외부 함수 내부에서만 호출 가능하다
 */

 function outer() {
     var x = 1;

     function inner() {
         var y =2;
         console.log(x + y)
     }

     inner()
 }

 outer()
