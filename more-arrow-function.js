const addNumber = (num1, num2) => num1 + num2;
const fullName = (first, last) => first + ' ' + last;
const myName = fullName('Naimur', 'Rahman');
// console.log(myName);
const addition = (a, b, c, d, e) => a + b + c + d + e;

// no parameter arrow function 
const getPie = () => 3.1416;

// one parameter 
const double = (num) => num * 2;
// one parameter simple version 
const doubleIt = num => num * 2;

// multi line arrow function 
// multiple line arrow function must be use return keyword 
const mathOperation = (x, y, z) => {
    const sum = x + y;
    const sub = sum - z;
    const division = sub / 2;
    const result = division * 5;
    return result;
}
const operation = mathOperation(2, 3, 4);
// console.log(operation);