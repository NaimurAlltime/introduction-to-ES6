const maxNumber1 = Math.max(5, 45, 23, 2);
// console.log(maxNumber1);
const numbers = [3, 4, 17, 25, 20, 5];
const maxNumber = Math.max(...numbers);
// console.log(maxNumber);

// advance 
const numbers2 = [...numbers];
const numbers3 = [60,50, ...numbers, 23, 28];
numbers.push(34);
numbers2.push(77);
console.log(numbers);
console.log(numbers2);
console.log(numbers3);