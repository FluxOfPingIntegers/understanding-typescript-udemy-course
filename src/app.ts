const userName = 'Max';
// username = 'Maximilian; // not allowed
let age = 30;

age = 29;

// function add(a: number, b: number) {
//     let result;
//     result = a + b;
//     return result;
// }

// if (age > 20) {
//   let isOld = true;
// }
// 
// console.log(isOld);

// console.log(result);

const add = (a: number, b: number) => a + b;

const printOutput: (a: string | number) => void = output => console.log(output);

const button = document.querySelector('button');

if (button) {
  button.addEventListener('click', event => console.log(event));
}

printOutput(add(5, 2));