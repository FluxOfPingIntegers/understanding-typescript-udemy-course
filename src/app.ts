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

// const add = (a: number, b: number = 1) => a + b;
// 
// const printOutput: (a: string | number) => void = output => console.log(output);
// 
// const button = document.querySelector('button');
// 
// if (button) {
//   button.addEventListener('click', event => console.log(event));
// }
// 
// printOutput(add(5));

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);

const person ={
  name: 'Max',
  age: 30,
};

const copiedPerson = { ...person };

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addNumbers = add(5, 10, 2);
console.log(addNumbers);