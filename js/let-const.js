// no more use of var 
// let: let it to reassign 
// const: do not allow it to reassign 
// let and const use {let, const} 2nd braked working can not boundary 
// let and const is block scope 

let friendAge = 21;
friendAge = 24;
console.log(friendAge);

const name = 'naimur';
// const reassign not allow 
// name = 'tushar';
console.log(name);

const numbers = [22, 12, 24, 18];
// const is push and pop operation use valid way
numbers.push(27);
// and index value change 
numbers[2] = 17;
console.log(numbers);

const student = {
    name: 'Naimur',
    address: 'Gazipur'
}

// not allow 
// student = {
//     name: 'Naimur Rahman'
// }

// allow 
student.name = 'Naimur Rahman';
console.log(student);

// allow 
for(let i = 0; i < numbers.length; i++){
    const number = numbers[i]; 
    console.log(number)
}