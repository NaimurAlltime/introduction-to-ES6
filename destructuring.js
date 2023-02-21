// Object destructuring 
const Student = {
    id: 2212081019,
    name: 'Naimur Rahman',
    age: 22,
    department: 'Computer Science And Engineering',
    address: 'Dhaka'
}

// console.log(Student.name);
const {name} = Student;
// console.log(name);
const {department, address} = Student;
// console.log(department, address);

// Array destructuring 
const [first, second, third] = [23, 25, 28, 35, 34];
// console.log(first, second, third);

const [bestFriend, classmate] = ['shovo', 'sabbir'];
// console.log(bestFriend, classmate);