function add(first, second=0){
    const result = first + second;
    return result;
}

const addNumber = add(10);
console.log(addNumber);

function fullName(firstName, lastName = 'Rahman'){
    const fullName = firstName + ' ' + lastName;
    return fullName;
}

const myName = fullName('Naimur');
console.log(myName);