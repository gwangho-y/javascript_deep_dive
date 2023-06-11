// 단축 평가


// 논리합(||) 연산자 : 두 연산자 중 하나 라도 truthy 값일 경우 true를 반환한다

console.log('Cat' || 'Dog')  //Cat // 논리합 연산자는 첫번째 피 연산자가 truthy값이면 바로 반환한다.
console.log(false || 'Dog') // Dog //두번째 연자가 truthy값이기 때문에 Dog를 반환한다.
console.log('Cat' || false) // Cat

// 논리 곱(&&) 연산자 : 두 연산자 모두 truthy 값일 경우 true를 반환한다
console.log('Cat' && 'Dog') // Dog // 논리곱 연산자는 두번째 연산자까지 판별 후에 truthy 값인 Dog를 반환한다.
console.log(false && 'Dog') // false
console.log('Cat' && false) // false
