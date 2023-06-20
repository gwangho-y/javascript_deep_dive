// 클로져 : 외부 함수보다 중첩 함수보다 오래 유지되는 경우, 중첩 함수는 생명주기가 종료된 외부함수를 여전히 참조할 수 있는데 이걸 클로져라고 한다.

const x = 1


function  outer () {
    const x = 10
    // inner의 Environment 슬롯에는 outer의 렉시컬환경 즉, outer를 상위 스코프로 지정하고 있다.
    const inner = function () {
        // 여기서 x는 상위 스코프인 outer의 x를 참조하고 있다.
        console.log(x)
    }
    // outer는 inner를 반환
    return inner
}

const innerFunc = outer ();
// 이 시점에 outer는 사라졌으나 가비지 컬렉터에 의해 제거되지 않는다.
// 왜냐하면 innerFunc(inner)은 상위 스코프인 outer의 x 참조를 하고 있기 때문이다.
innerFunc()