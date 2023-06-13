const obj = Object.create(null);

// __proto__을 사용 불가능한 경우가 있으므로
console.log(obj.__proto__) // undefined

// getPrototypeOf ,setPrototypeOf를 사용하도록 하자!!
console.log(Object.getPrototypeOf(obj)) // null



