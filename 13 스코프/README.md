# 13.4 함수 레벨 스코프

블록 레벨 스코프 : if, for, while, try/catch를 지역 스코프로 갖는 것. <br>
함수 레벨 스코프 : var 키워드로 선언된 변수는 오로지 함수의 코드 블록을 지역 스코프로 인정.

아래 예제를 보면 신기하게도 if 문 안에 선언한 변수를 전역에서 읽을 수 있는데, 이는 자바스크립크가 
if 문 같은 코드 블럭은 지역레벨 스코프로 인정하지 않기 때문이다.


    var var1 = 1;
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
    console.log(var4) // 함수 내부에서는 외부로 스코프가 잡히지 않는다
    console.log(var5) // 함수 내부에서는 외부로 스코프가 잡히지 않는다



# 13.5 렉시컬 스코프
렉시컬 스코프(정적 스코프) : 함수를 어디서 정의했는지에 따라 상위 스코프를 결정하는 것.
동적 스코프 : 함수가 호출되는 시점에 상위 스코프를 결정하는 것.


    var x =1

    function foo() {
        var x = 10;
        bar()
    }
    
    /*
        bar가 정의된 시점에 상위 스코프가 결정된다. 호출 된 곳에서 상위 스코프를 설정하는게 아니다.
        bar에서 사용되는 x는 bar가 정의된 이 위치에서 상위스코프인 전역에 선언된 x를 가리킨다.
    */
    function bar () {
        console.log(x)
    }
    
    foo()
    bar()