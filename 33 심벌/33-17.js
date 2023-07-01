
// array나 map , set 등은 for of로 순회 가능한 객체를 만든다.
const iterable = {
    // Symbol.iterator 메서드를 구현하면 이터러블 프로토콜을 준수하게 된다.
    [Symbol.iterator]() {
        let cur = 1
        const max = 5

        // 여기의 return객체를 이터레이터라고 하고
        // 이터레이터는 next라는 메서드를 소유해야한다
        // 다음 요소를 가져온다.
        return {
            next() {
                return { value: cur++, done: cur > max + 1}
            }
        }

    }
}

for (const i of iterable) {
    console.log(i)
}