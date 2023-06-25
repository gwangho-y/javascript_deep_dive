
const object = {
    a : 1
};
// 화살표 함수는 함수 자체의 this 바인딩을 갖지 않는다
// 중첩함수로 2중으로 들어가 있더라도 화살표 함수는 항상 상위의 this를 참조한다.
// 고로, 즉시 실행함수의 this를 참조한다.
(function () {
    const bar = () => () => console.log(this);
    bar()()
}).bind(object)()