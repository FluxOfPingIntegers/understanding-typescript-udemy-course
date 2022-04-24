// const names: Array<string> = []; // string[] , is a generic type (type connected to other type)
// names[0].split(' ');

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('This is done!');
//   }, 2000);
// })
// 
// promise.then(data => {
//   data.split(' ');
// })

function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 })
console.log(mergedObj)