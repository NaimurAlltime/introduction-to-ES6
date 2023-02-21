// function declaration
function add(num1, num2){
    return num1 + num2;
} 

// function expression
const add1 = function add1(num1, num2){
    return num1 + num2;
} 

// function expression with anonymous function
const add2 = function(num1, num2){
    return num1 + num2;
} 

// arrow function 
const add3 = (num1, num2) => num1 + num2;

const result = add3(20, 10);
console.log(result);