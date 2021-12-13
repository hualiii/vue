function covert(obj) {
  Object.keys(obj).forEach(key => {
    let currentValue = obj[key]
    Object.defineProperty(obj, key, {
      get() {
        console.log('current key is: ', key, ';current value is：', currentValue)
        return currentValue
      },
      set(newValue) {
        console.log('current key is: ', key, ';new value is：', newValue)
        currentValue = newValue
      }
    })
  })
}

let obj = {
  foo: 2,
  bar: 3
}
covert(obj)
obj.foo = 5
console.log(obj.foo)